import {Route,Routes} from "react-router-dom"
// import {Layout} from "../components/Layout"
import {Home} from "../components/Home/Home"


export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                    </>
                } />
            </Routes>

        </div>
    )
}
