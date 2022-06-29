import { buildStore as buildIt, inferType, Prototype } from 'prodom'
import './editor.css'
import { devIcon } from './icons'
import jsSHA from 'jssha'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, TwitterAuthProvider } from 'firebase/auth'
import { getDatabase, ref, set, child, get } from 'firebase/database'
import { Pool } from 'pg'

export interface EditorProps {
  demo: string
  title: string
  hash: string
}
const firebaseConfig = {
  apiKey: 'AIzaSyCV0vTy8phM4yyGRE6oh8An5me3UYd-aLo',
  authDomain: 'prodom-f3971.firebaseapp.com',
  databaseURL:
    'https://prodom-f3971-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'prodom-f3971',
  storageBucket: 'prodom-f3971.appspot.com',
  messagingSenderId: '896430409380',
  appId: '1:896430409380:web:13fcc734acb6ac74a48831',
  measurementId: 'G-GF396EKDVB',
}

const Editor = (
  { demo, title, hash }: EditorProps,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  {
    onDemoChange,
    setTitle,
    setHash,
    setHashFile,
    checkIntegrity,
    createKeyPair,
    getKey,
  }: EditorActions,
  demoProp: string,
  titleProp: string,
  link: string,
  devMode: boolean,
  dark: boolean,
  hashProp: string,
) => {
  const resolvedDemo = demo !== undefined ? demo : demoProp
  const resolvedTitle = title !== undefined ? title : titleProp
  const resolvedhash = hash !== undefined ? title : hashProp
  const titleDOM = {
    tag: 'div',
    className: ['title', devMode && 'dev', dark && 'dark'],
    innerText: resolvedTitle,
    contentEditable: devMode,
  }
  const hashDOM = {
    tag: 'div',
    className: ['hash', devMode && 'dev', dark && 'dark'],
    innerText: resolvedhash,
    contentEditable: devMode,
  }

  const linkDOM = {
    tag: 'div',
    className: ['title', 'tooltip', devMode && 'dev', dark && 'dark'],
    children: [
      { tag: 'span', innerText: 'edit on codepen', className: ['tooltiptext'] },
      {
        tag: 'a',
        href: link,
        className: ['link'],
        children: [devIcon(dark, '#666', '#bbb', 16, 16)],
      },
    ],
    contentEditable: devMode,
  }

  const headerDOM: Prototype<HTMLDivElement> = {
    tag: 'div',
    className: ['header', devMode && 'dev', dark && 'dark'],
    children: [titleDOM, link && linkDOM],
    contentEditable: devMode,
  }

  const leftDemoDOM: Prototype<HTMLDivElement> = {
    tag: 'div',
    className: ['left-demo', devMode && 'dev', dark && 'dark'],
    innerText: demoProp,
    oninput: (e: Event) => {
      onDemoChange((e.target as HTMLDivElement).innerText)
    },
    contentEditable: 'true',
  }
  const rightDemoDOM = inferType({
    tag: 'div',
    className: ['right-demo', devMode && 'dev', dark && 'dark'],
    children: [eval('(' + resolvedDemo + ')')],
    contentEditable: devMode,
  })

  const demoContainerDOM: Prototype<HTMLDivElement> = {
    tag: 'div',
    className: ['demo-container', devMode && 'dev', dark && 'dark'],
    children: [rightDemoDOM],
    contentEditable: devMode,
  }
  return {
    tag: 'div',
    className: ['editor-container', devMode && 'dev', dark && 'dark'],
    children: [headerDOM, demoContainerDOM, hashDOM],
    contentEditable: devMode,
  }
}
function arrayBufferToBase64(arrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  const b64 = window.btoa(byteString)

  return b64
}

function addNewLines(str) {
  let finalString = ''
  while (str.length > 0) {
    finalString += str.substring(0, 64) + '\n'
    str = str.substring(64)
  }

  return finalString
}

function toPemPrivate(privateKey) {
  const b64 = addNewLines(arrayBufferToBase64(privateKey))
  const pem =
    '-----BEGIN PRIVATE KEY-----\n' + b64 + '-----END PRIVATE KEY-----'

  return pem
}
function toPemPublic(publicKey) {
  const b64 = addNewLines(arrayBufferToBase64(privateKey))
  const pem = '-----BEGIN PUBLIC KEY-----\n' + b64 + '-----END PUBLIC KEY-----'

  return pem
}
const calculate_sha512_for_file = function (file, mail, email = false) {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onerror = function (e) {
      alert(e)
      reject(new DOMException('Problem parsing input file.'))
    }
    reader.onload = function () {
      const shaObj = new jsSHA('SHA3-512', 'TEXT')
      if (email) {
        const date = new Date()
        shaObj.update(
          mail + date.toString() + date.toISOString() + reader.result,
        )
      } else {
        shaObj.update(reader.result)
      }
      const hash = shaObj.getHash('HEX')
      resolve(hash)
    }
    reader.readAsBinaryString(file)
  })
}

// Crypto functions
const signAlgorithm = {
  name: 'RSASSA-PKCS1-v1_5',
  hash: {
    name: 'SHA-512',
  },
  modulusLength: 4096,
  extractable: false,
  publicExponent: new Uint8Array([1, 0, 1]),
}

function textToArrayBuffer(str) {
  const buf = unescape(encodeURIComponent(str))
  const bufView = new Uint8Array(buf.length)
  for (let i = 0; i < buf.length; i++) {
    bufView[i] = buf.charCodeAt(i)
  }
  return bufView
}
function signData(key, data) {
  return window.crypto.subtle.sign(signAlgorithm, key, textToArrayBuffer(data))
}

function testVerifySig(pub, sig, data) {
  return window.crypto.subtle.verify(signAlgorithm, pub, sig, data)
}

function base64StringToArrayBuffer(b64str) {
  const byteStr = atob(b64str)
  const bytes = new Uint8Array(byteStr.length)
  for (let i = 0; i < byteStr.length; i++) {
    bytes[i] = byteStr.charCodeAt(i)
  }
  return bytes.buffer
}
function arrayBufferToBase64String(arrayBuffer) {
  const byteArray = new Uint8Array(arrayBuffer)
  let byteString = ''
  for (let i = 0; i < byteArray.byteLength; i++) {
    byteString += String.fromCharCode(byteArray[i])
  }
  return btoa(byteString)
}

function convertBinaryToPem(binaryData, label) {
  const base64Cert = arrayBufferToBase64String(binaryData)
  let pemCert = '-----BEGIN ' + label + '-----\r\n'
  let nextIndex = 0
  let lineLength
  while (nextIndex < base64Cert.length) {
    if (nextIndex + 64 <= base64Cert.length) {
      pemCert += base64Cert.substr(nextIndex, 64) + '\r\n'
    } else {
      pemCert += base64Cert.substr(nextIndex) + '\r\n'
    }
    nextIndex += 64
  }
  pemCert += '-----END ' + label + '-----\r\n'
  return pemCert
}
function convertPemToBinary(pem) {
  const lines = pem.split('\n')
  let encoded = ''
  for (let i = 0; i < lines.length; i++) {
    if (
      lines[i].trim().length > 0 &&
      lines[i].indexOf('-BEGIN RSA PRIVATE KEY-') < 0 &&
      lines[i].indexOf('-BEGIN RSA PUBLIC KEY-') < 0 &&
      lines[i].indexOf('-END RSA PRIVATE KEY-') < 0 &&
      lines[i].indexOf('-END RSA PUBLIC KEY-') < 0
    ) {
      encoded += lines[i].trim()
    }
  }
  return base64StringToArrayBuffer(encoded)
}

function exportPublicKey(keys) {
  return new Promise(function (resolve) {
    window.crypto.subtle
      .exportKey('spki', keys.publicKey)
      .then(function (spki) {
        resolve(convertBinaryToPem(spki, 'RSA PUBLIC KEY'))
      })
  })
}

function exportPrivateKey(keys) {
  return new Promise(function (resolve) {
    const expK = window.crypto.subtle.exportKey('pkcs8', keys.privateKey)
    expK.then(function (pkcs8) {
      resolve(convertBinaryToPem(pkcs8, 'RSA PRIVATE KEY'))
    })
  })
}

function exportPemKeys(keys) {
  return new Promise(function (resolve) {
    exportPublicKey(keys).then(function (pubKey) {
      exportPrivateKey(keys).then(function (privKey) {
        resolve({ publicKey: pubKey, privateKey: privKey })
      })
    })
  })
}
function importPublicKey(pemKey) {
  return new Promise(function (resolve) {
    const importer = window.crypto.subtle.importKey(
      'spki',
      convertPemToBinary(pemKey),
      signAlgorithm,
      true,
      ['verify'],
    )
    importer.then(function (key) {
      resolve(key)
    })
  })
}

function importPrivateKey(pemKey) {
  return new Promise(function (resolve) {
    const importer = window.crypto.subtle.importKey(
      'pkcs8',
      convertPemToBinary(pemKey),
      signAlgorithm,
      true,
      ['sign'],
    )
    importer.then(function (key) {
      resolve(key)
    })
  })
}
// end of Crypto functions

// Twitter Login
const app = initializeApp(firebaseConfig)
const auth = getAuth()
function signInWithTwitter() {
  const provider = new TwitterAuthProvider()
  signInWithPopup(auth, provider)
    .then(function (result) {
      // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
      // You can use these serverside with your app's credentials to access the Twitter API.
      const credential = TwitterAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const secret = credential.secret

      // The signed-in user info.
      const user = result.user
      console.log(user)
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.email
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential
      // ...
    })
}

// end of Twitter Login

// saving the keypairs to the database
// const client = new Pool({
//   connectionString: "postgres://xwkcbfusyonupc:4c21a5ec7330af121bc230da9b932f538e6ebcd0379b8d22358f492ea9fd1f66@ec2-44-198-82-71.compute-1.amazonaws.com:5432/d86dddl2lus9l9",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// })
// client.connect()


// client.query(
//   'INSERT INTO Users (id, publicKey, privateKey) VALUES (3, first, second)',
//   (err, res) => {
//     if (err) throw err
//     for (const row of res.rows) {
//       console.log(JSON.stringify(row))
//     }
//     client.end()
//   },
// )

function saveKeys(userId, publicKey, privateKey) {
  const database = getDatabase(app)
  const users = ref(database, 'users/' + userId)
  set(users, {
    publicKey: publicKey,
    privateKey: privateKey,
  })
}
function getKeys(userId) {
  const dbRef = ref(getDatabase(app))
  const result = get(child(dbRef, `users/${userId}`))
    .then(function (snapshot) {
      if (snapshot.exists()) {
        const privateKey = snapshot.val().privateKey
        const publicKey = snapshot.val().publicKey
        convertPemToBinary(publicKey)
        document.getElementById('key-pair-inf').innerText = JSON.stringify(
          convertBinaryToPem(publicKey, 'RSA PUBLIC KEY'),
        )

        console.log(publicKey)

        return snapshot.val()
      } else {
        return 'No Data Available'
      }
    })
    .catch(function (error) {
      console.log(error)
      return 'No Data Available'
    })
}
// end of saving the keypairs to the database

type EditorActions = {
  onDemoChange: (demo: string) => void
  setTitle: (title: string) => void
  setHash: (str: string) => void
  setHashFile: (file: any, mail: string) => void
  checkIntegrity: (file: any, hash: string) => void
  createKeyPair: () => void
  getKey: (userId: string) => void
}
const actions = (state: EditorProps): EditorActions => ({
  onDemoChange: (demo: string) => {
    state.demo = demo
  },
  setTitle: (title: string) => {
    state.title = title
  },
  setHash: (str: string) => {
    const sha512 = new jsSHA('SHA3-512', 'TEXT')
    sha512.update(str)
    state.title = 'y4e'
  },
  setHashFile: async (file: any, mail: string) => {
    await calculate_sha512_for_file(file, mail, true).then((hash) => {
      state.title = 'SHA3-512 for this file is: ' + (hash as string)
    })
  },
  checkIntegrity: async (file: any, hash: string) => {
    await calculate_sha512_for_file(file, hash).then((result) => {
      if (hash === (result as string)) {
        console.log('file is ok')
        state.title = 'File is ok '
      } else {
        console.log('file is not ok')
        state.title = 'File is not ok '
      }
    })
  },
  createKeyPair: async () => {
    // 4096 is the key size of the keypair
    await window.crypto.subtle
      .generateKey(
        // {
        //   name: 'RSA-OAEP',
        //   modulusLength: 4096, // can be 1024, 2048 or 4096
        //   publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
        //   hash: { name: 'SHA-512' }, // or SHA-512
        // },
        // true,
        signAlgorithm,
        true,
        ['sign', 'verify'],
      )
      .then(function (keyPair) {
        exportPemKeys(keyPair)
          .then(function (keys) {
            document.getElementById('key-pair-info').innerText =
              JSON.stringify(keys.publicKey) +
              '\n' +
              JSON.stringify(keys.privateKey)
            // save keys to local storage
            saveKeys('55', keys.publicKey, keys.privateKey)
            localStorage.setItem('publicKey', JSON.stringify(keys.publicKey))
            // console.log(localStorage.getItem('publicKey'));
            localStorage.setItem('privateKey', JSON.stringify(keys.privateKey))

            console.log(JSON.stringify(keys.publicKey))
            // console.log(JSON.stringify(keys.privateKey))
            signData(keyPair.privateKey, 'test').then((sig) => {
              console.log(arrayBufferToBase64(sig))
              testVerifySig(
                keyPair.publicKey,
                sig,
                textToArrayBuffer('test'),
              ).then((signedData) => {
                console.log(signedData)
              })
            })
          })
          .catch(function (err) {
            console.log(err)
          })
      })
  },
  getKey: async (userId: string) => {
    const pkey = await getKeys(userId)
    console.log(JSON.stringify(pkey))

    document.getElementById('key-pair-inf').innerText = JSON.stringify(
      pkey.publicKey,
    )
  },
})

export default buildIt(Editor, actions)
