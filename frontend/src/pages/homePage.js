import { Link } from "react-router-dom"
import Navbar from "../components/navbar"

const HomePage = () => {

    return (
        <>
            <Navbar />
            <div className="home-page-container">
                <div className="home-page-card">
                    <div className="box">
                    <Link to="/addhospital">
                        <img src="https://res.cloudinary.com/dxecoctrm/image/upload/v1721487406/rmnhb2cextmn5yguopl2.jpg" alt="" />
                        <button>Click here to Add Hospital</button>
                    </Link>
                    </div>
                    <div className="box">
                    <Link to="/hospitals">
                        <img src="https://res.cloudinary.com/dxecoctrm/image/upload/v1721487483/ritzszqa3qstfgamrjq4.jpg" alt="" />
                    <button>Click here to know nearby hospitals</button>
                    </Link>
                    </div>
                    <div className="box">
                    <Link to="/getall">
                        <img src="https://res.cloudinary.com/dxecoctrm/image/upload/v1721512038/wrxlpqozimsuy4nftvrh.png" alt="" />
                    <button>View all Hospitals</button>
                    </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage