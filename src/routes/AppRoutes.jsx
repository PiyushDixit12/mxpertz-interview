import {Route,Routes} from "react-router-dom"
// import {Layout} from "../components/Layout"
import {Home} from "../components/Home/Home"
import {StoreDetail} from "../components/StoriesDetails/StoreDetail"


export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {/* route for first page  */}
                <Route path="/" element={
                    <>
                        <Home />
                    </>
                } />
                {/* route for second page  */}
                <Route path="/stories/:id" element={
                    <>
                        <StoreDetail />
                    </>
                } />
            </Routes>

        </div>
    )
}
