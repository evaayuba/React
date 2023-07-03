import { useState } from "react";
import Footer from "../Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import axios from "axios";
// import './style.css';

const AddStadium = () =>{
    // const[formData,setformData]=useState({
    //     Name: "",
    //     Location: "",
    //     Capacity: "",
    // });
    // const handleChange = (event) => {
    //     setformData({... formData,[event.target.name]: event.target.value});
    // };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios
    //     .post("http://localhost:8081/customer/add",formData)
    //     .then(response.data); //success message
    //     //reset the form if needed

    //     toastPlacements.success("Data inserted successfully",{
    //         Name: "toast-success",
    //         Location: toastPlacements.LOCATION.TOP_RIGHT,
    //         Capacity: 200,
    //     });
    
    // };

    return(
        <>
        <Header />
        <ToastContainer />
        <Navigation />
        <div class="section">
            <h2> This is Add Stadium Form </h2>
            <div class="form-container">
        <h2>Add Stadium</h2>
        <form  onSubmit={handleSubmit } action="add-stadium.php" method="POST">
            <div class="form-group">
                <label for="name">Stadium Name:</label>
                value={formData.Name}
                onChange={handleChange}
                <input type="text" id="name" name="name" required></input>
            </div>

            <div class="form-group">
                <label for="location">Location:</label>
                value={formData.Location}
                onChange={handleChange}
                <input type="text" id="location" name="location" required></input>
            </div>

            <div class="form-group">
                <label for="capacity">Capacity:</label>
                value={formData.Capacity}
                onChange={handleChange}
                <input type="number" id="capacity" name="capacity" required></input>
            </div>

            <div class="form-group">
                <input type="submit" value="Add Stadium"></input>
            </div>
        </form>
    </div>

        </div><Footer />
        </>
    );
} 


export default AddStadium;