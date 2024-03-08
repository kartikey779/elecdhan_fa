import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CustomPagination from "./pagination";

function Cards() {
  const [cardData, setCardData] = useState([]);
  const [defaultData, setDefaultData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGender, setSelectedGender] = useState("Select Gender");
  const [selectedAddress, setSelectedAddress] = useState("Select Address");
  const [selectedAge, setSelectedAge] = useState("Select Age");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterData = () => {
    let filteredData = defaultData;

    // Filter based on gender
    if (selectedGender !== "Select Gender") {
      filteredData = filteredData.filter((item) => item.gender === selectedGender);
    }

    // Filter based on address
    if (selectedAddress !== "Select Address") {
      filteredData = filteredData.filter((item) => item.address === selectedAddress);
    }

    // Filter based on age
    if (selectedAge !== "Select Age") {
      filteredData = filteredData.filter((item) => item.age >= parseInt(selectedAge, 10));
    }

    // Filter based on search term (name in this example)
    if (searchTerm.trim() !== "") {
      filteredData = filteredData.filter(
        (item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Update state with the filtered data
    setCardData(filteredData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://elecdhan-api.vercel.app/form");
        const jsonData = await response.json();
        setCardData(jsonData);
        setDefaultData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <a href="https://from-mocha.vercel.app/" target="blank" className="btn btn-primary btn-sm m-2">
        Form
      </a>
      <a href="/" className="btn btn-danger btn-sm">
        Voter
      </a>

      <select
        className="form-select m-1 p-2"
        onChange={(e) => setSelectedGender(e.target.value)}
      >
        <option>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <select
        className="form-select m-1 p-2"
        onChange={(e) => setSelectedAddress(e.target.value)}
      >
        <option>Select Address</option>
        <option>HarraiPatti</option>
        <option>Labeda</option>
        <option>Banpurva</option>
      </select>

      <select
        className="form-select m-1 p-2"
        onChange={(e) => setSelectedAge(e.target.value)}
      >
        <option>Select Age</option>
        <option>18+</option>
        <option>28+</option>
        <option>38+</option>
        <option>48+</option>
      </select>

      <input
        type="text"
        placeholder="Search by Name"
        className="form-control m-1 p-2"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <button className="btn btn-primary m-1" onClick={filterData}>
        Apply Filters
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          {Array.isArray(cardData) ? (
            cardData
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item) => (
                <div className="col-md-2" key={item.id}>
                  <Card className="m-1">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      alt={item.name}
                      className="w-100 rounded p-1 "
                    />
                    <Card.Body className="m-1">
                      <Card.Title
                        style={{
                          fontFamily: "Chilanka",
                          fontSize: "1.4em",
                        }}
                      >
                        <b>Name:</b> {item.name}
                      </Card.Title>
                      <Card.Text style={{ fontFamily: "Chilanka" }}>
                        <b>Phone Number:</b> {item.phoneNumber}
                      </Card.Text>
                      <Card.Text style={{ fontFamily: "Chilanka" }}>
                        <b>Gender:</b> {item.gender}
                      </Card.Text>
                      <Card.Text style={{ fontFamily: "Chilanka" }}>
                        <b>Age:</b> {item.age}
                      </Card.Text>
                      <Card.Text style={{ fontFamily: "Chilanka" }}>
                        <b>Address:</b> {item.address}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))
          ) : (
            <p>no data is available</p>
          )}
        </div>
      )}

      <CustomPagination
        totalPages={Math.ceil(cardData.length / itemsPerPage)}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cards;
