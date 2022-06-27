import { buildStore as buildIt, Prototype, render } from 'prodom'
import './blog.article.css'
import Editor from './editor'
import { darkIcon, devIcon } from './icons'
import jsSHA from 'jssha'
export interface BlogArticleProps {
  title: string
  subtitle: string
  date: string
  link: string
  body: string
  devMode: boolean
  dark: boolean
}

const article: BlogArticleProps = {
  title: 'An easy to use web framework',
  subtitle: 'Prodom, the next open web framework',
  date:
    'July 7th - 2021 - <a href=" https://github.com/m3ftah/prodom/commits/master/website">Changelog</a>',
  link: 'https://github.com/m3ftah/prodom',
  body: `
  Prodom is a <code>2kB</code> library that helps you build web apps.
  By design, it is a declarative framework, component based and easy to use.
  Moreover, it can be integrated into already existing projects with no lock-in, as it only works on a DOM object,
  and exports a dom object.
  </br>
  Prodom allows you to to compose and manage complex dom elements using pure idiomatic javascript.
  You do not need to learn anything new aside from the <b>prototype</b> concept and the <b>store</b> structure.
  </br>
  Prodom follows a <i>Flux Architecture</i> concept by providing you with a built-in store/actions design.
  </br>
  The main motivation behind providing such a framework is the complexity and the overhead given by popular web frameworks.
  Not to mention the lock-in, the library size and the complex buggy APIs.
  </br>
  If you are already familiar with some standard concepts like: <i>Flux Architecture</i>, pure components and HTML5.
  Then you are ready to use Prodom.
  <h3>Some <i>behind the scene</i> considerations</h3>
 
  <b>Reconciliation and virtual DOM:</b> these are used to automatically apply diffing whenever a new render is called.
  Thus, minimizing the number of DOM operations.
  </br>
  <b>Concurrent Mode:</b> you can specify a timeout for which, the rendering will not block the UI for more than that timeout.
  This feature was only recently available in React.js (just after I gave up on it).
  </br>
  <b>Differed rendering:</b> you can provide a promise on a component that will be rendered after a data is fetched. Meanwhile,
  you can provide another component as a placeholder.
  </br>
  <b>Automatic batching:</b> when multiple store actions are called at the same time, the store state will be updated accordingly,
  but only one rendering function will be called at the end.
  While this feature is not yet available in React.js; it is provided by Prodom out of the box.
  </br>
  <b>Carried Context:</b> this means you can render from anywhere.
  This may come handy if you want to extend Prodom.
  </br>
  <b>Finally,</b> while Prodom has been heavily inspired by React.js, this is not a swiss army knife solution as React.js.
  The main reason behind building such framework is efficiency.
  With small size, few concepts to get around; you can code web apps faster with out of the box performance.
  `,
  devMode: false,
  dark:
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches,
}

const createBlogArticle = (
  { title, subtitle, date, link, body, devMode = true, dark }: BlogArticleProps,
  { setDark, setDevMode }: BlogActions,
): Prototype<HTMLBodyElement> => {
  const darkModeDOM: Prototype<HTMLDivElement> = {
    tag: 'div',
    className: ['control'],
    style: { backgroundColor: dark ? '#bbb' : '#666' },
    onclick: () => setDark(!dark),
    contentEditable: '' + devMode,
    children: [darkIcon(dark, '#666', '#bbb')],
  }
  const devModeDOM: Prototype<HTMLDivElement> = {
    tag: 'div',
    className: ['control'],
    onclick: () => setDevMode(!devMode),
    contentEditable: '' + devMode,
    children: [devIcon(dark, '#666', '#bbb')],
  }
  const headerDOM: Prototype<HTMLDivElement> = {
    tag: 'div',
    className: ['header'],
    children: [devModeDOM, darkModeDOM],
  }

  const container = {
    tag: 'div',
    className: ['blog-article-container', devMode && 'dev', dark && 'dark'],
    children: [
      Editor(
        `{
  	tag: 'input',
	type: 'file',
	onchange: (e) => {
		const file = e.target.files[0]
		setHashFile(file)
	}
}`,
        'A simple prototype',
        'https://codepen.io/m3ftah/pen/PopdwaG',
        devMode,
        dark,
      ),
      Editor(
        `{
  tag: 'div',
  className: ['form'],
  children:
  [
    {
      tag: 'input',
      id: ['email-input'],
      type: 'email',
      value: 'Email',
    },
    {
      tag:"br",
    },
    {
      tag: 'input',
      type: 'file',
      className: ['fileinput'],
      id: 'file',
    },
    {
      tag:"br",
    },
    {
      tag: 'button',
      type: 'submit',
      innerText: 'submit',
      onclick: () => {
        const fileInput = document.getElementById('file');
        const selectedFile = fileInput.files[0];
				const emailinput = document.getElementById('email-input');
				const email = emailinput.value;
        setHashFile(selectedFile,email)
      }
    },
  ]
}`,
        'Adding the preamble',
        'https://codepen.io/m3ftah/pen/PopdwaG',
        devMode,
        dark,
      ),
      Editor(
        `{
  	tag: 'button',
		innerText: 'Click mee',
		onclick: () => { 
			console.log('clicked')
			setHash('Hello worldd')
			},
}`,
        'A simple prototype',
        'https://codepen.io/m3ftah/pen/PopdwaG',
        devMode,
        dark,
      ),
    ],
    contentEditable: '' + devMode,
  }
  const padding = {
    tag: 'div',
    className: ['padding', dark && 'dark'],
    contentEditable: '' + devMode,
  }
  return {
    init: () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          const mode = e.matches
          setDark(mode)
        })
      return document.createElement('body')
    },
    className: ['blog-article-page', devMode && 'dev', dark && 'dark'],
    children: [headerDOM, container, padding],
    contentEditable: '' + devMode,
  }
}
type BlogActions = {
  setDark: (dark: boolean) => void
  setDevMode: (devMode: boolean) => void
}
const actions = (state: BlogArticleProps): BlogActions => ({
  setDark: (dark: boolean) => {
    state.dark = dark
  },
  setDevMode: (devMode: boolean) => {
    state.devMode = devMode
  },
})

export default render(buildIt(createBlogArticle, actions, article)(), {})
