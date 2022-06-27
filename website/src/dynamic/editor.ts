import { buildStore as buildIt, inferType, Prototype } from 'prodom'
import './editor.css'
import { devIcon } from './icons'
import jsSHA from 'jssha'
export interface EditorProps {
  demo: string
  title: string
  hash: string
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
    children: [leftDemoDOM, rightDemoDOM],
    contentEditable: devMode,
  }
  return {
    tag: 'div',
    className: ['editor-container', devMode && 'dev', dark && 'dark'],
    children: [headerDOM, demoContainerDOM, hashDOM],
    contentEditable: devMode,
  }
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
type EditorActions = {
  onDemoChange: (demo: string) => void
  setTitle: (title: string) => void
  setHash: (str: string) => void
  setHashFile: (file: any, mail: string) => void
  checkIntegrity: (file: any, hash: string) => void
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
})

export default buildIt(Editor, actions)
