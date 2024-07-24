import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

const HospitalDetailPage = () => {
    const location = useLocation();
    const hospital = location.state?.hospital;

    if (!hospital) {
        return <div>No hospital data available.</div>;
    }

    return (
        <>
            <Navbar />
            <div className="description-container">
            <div className="viewAllCards">
            <div className="view-card">
            <div className="image">
            <img src={hospital.imageUrl} alt={hospital.name} className="hospital-image" />
            </div>
            <div className="text">
            <h1> {hospital.name}</h1>
                <p><strong>City:</strong> {hospital.cityLower}</p>
                <p><strong>Address:</strong> {hospital.address}</p>
                <p><strong>Specialities:</strong> {hospital.specialities.join(', ')}</p>
                <p><strong>Rating:</strong> {hospital.rating}</p>
                <p><strong>Description:</strong> {hospital.description}</p>
                <p><strong>Number of Doctors:</strong> {hospital.numberOfDoctors}</p>
                <p><strong>Number of Departments:</strong> {hospital.numberOfDepartments}</p>
                
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default HospitalDetailPage;