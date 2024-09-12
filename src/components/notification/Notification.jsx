import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Notification = () => {
  return (
    <div>
        <ToastContainer position="bottom-right" autoClose={4000} closeOnClick/>
    </div>
  )
}

export default Notification