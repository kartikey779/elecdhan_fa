import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phoneNumber", phoneNumber);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("image", image);

  
    try {
      let result = await fetch("http://localhost:5000/form", {
        method: "post",
        body: formData,
      });
  
      console.log("fetch Result " + result);
  
      if (!result.ok) {
        const errorMessage = await result.text();
        throw new Error(`HTTP error! Status: ${result.status}, Message: ${errorMessage}`);
      }
      if(result.ok){
        alert("Data saved successfully");
          setName("");
          setPhoneNumber("");
          setAddress("");
          setAge("");
          setGender("");
          setImage(null);
          setImagePreview(null);
      }

    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file); // Set the file object
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <div className="container" >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mt-5">Form</h2>
          <form className="mt-5" onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Gender</label>
              <select
                className="form-control"
                id="address"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Choose option</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <select
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              >
                <option>Choose option</option>
                <option>HarraiPatti</option>
                <option>Labeda</option>
                <option>Banpurva</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="image"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="img-thumbnail"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}
