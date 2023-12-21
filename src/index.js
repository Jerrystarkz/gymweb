import  ReactDOM  from 'react-dom/client'
import App from './App'
import './index.css'

// create a link using query selector

const root = ReactDOM.createRoot(document.querySelector('#root'));

//call the render method

root.render(<App/>)