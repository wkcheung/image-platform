import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './src/components/App'

import './lib/dropzonejs/dropzone.min.css'
import './lib/semantic/dist/semantic.min.css'
import './src/assets/css/global.css'

// let store = createStore(todoApp)

// render(
  // <Provider store={store}>
    // <App />
  // </Provider>,
  // document.getElementById('root')
// )

render(
  <App />,
  document.getElementById('root')
)
