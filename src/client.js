// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './components/App'

// if (typeof window !== 'undefined') {
//   // what a hack!! :-)
//   const __html = document.getElementsByTagName('h1')[0].parentNode.innerHTML
//   window.initReact = props =>
//     ReactDOM.hydrate(
//       <App {...props}>
//         <div dangerouslySetInnerHTML={{ __html }} />
//       </App>,
//       document.getElementById('content')
//     )
// }

window.initReact = () => {
  // noop
}
