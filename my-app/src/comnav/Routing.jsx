import { BrowserRouter, Routes } from "react-router-dom"
import SecondPage from "./SecondPage"
const Routing=()=>{
    return <div>
        Routing
        <BrowserRouter>
        <Routes>
            <Route path="/" element ={<Main/>}/>
            <Route path="/SecondPage" element={<SecondPage/>}/>
        </Routes>
        </BrowserRouter>
    </div>
}
export default Routing