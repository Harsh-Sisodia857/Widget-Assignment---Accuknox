import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from "./store/store"
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <ToastContainer />
    <App />
  </Provider>,
)
