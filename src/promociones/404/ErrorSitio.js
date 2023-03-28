import { useNavigate } from "react-router-dom";



const ErrorSitio=()=>{
    const navegacion=useNavigate();
    return(
        <div>
        <button onClick={()=>navegacion("/")}>ir al inicio</button>
        <p>asdfsfsfsdfsdfs</p>
        </div>
    )
}

export default ErrorSitio;