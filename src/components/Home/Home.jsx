import {Batch} from "../Batch/Batch";
import {AllStories} from "../allstories/AllStories";
import wave from '../../assets/wave.svg'
import galaxy from '../../assets/galaxy two.jpg'
import {Header} from "../header/Header";



export const Home = () => {
    // data for Batch show on home page first  =>

    const data = [
        {
            title: "New",
            bgColor: "blue"
        },{
            title: "In Progress",
            bgColor: "#FFCE51"
        },{
            title: "Completed",
            bgColor: "rgb(103, 255, 83)"
        },{
            title: "Clear All",
            bgColor: "linear-gradient(90deg,rgb(48, 48, 207),rgb(11, 180, 248))"
        }
    ];

    return (
        <>
            <div className=" position-relative  pb-3 overflow-hidden" style={{minHeight: "70vh"}}>
                <Header />
                <img className=" position-absolute   w-100 h-100  " src={galaxy} style={{backgroundSize: "cover"}} alt="" />
                <div className=" container  py-5 position-relative  z-1">
                    <h1 className=" py-5 mt-5 text-white text-center fw-bold">Science Fiction Stories </h1>
                    <div className="row  d-flex justify-content-around flex-wrap ">

                        {data.map((value,index) => {
                            return <div key={index} className="col col-sm-6 col-md-3">
                                <Batch {...value} />
                            </div>
                        })
                        }
                    </div>
                </div>
                <div className=" w-100 position-absolute z-0 bottom-0">
                    <img src={wave} alt="" />
                </div>
            </div>
            <div style={{backgroundColor: "#00042a"}}>

                <div className="px-5 py-5 w-100">
                    {/* all stories to show data  */}
                    <AllStories />
                </div>
            </div>
        </>
    )
}
