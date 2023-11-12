import './App.css'
import Institute from './components/Institute/Institute'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <div className="APP">
      <Institute></Institute>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
