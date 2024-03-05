import Dropdown from 'react-bootstrap/Dropdown';
import WebFont from "webfontloader";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Space Grotesk"],
      },
    });
  }, []);
  return (
    
    <div style={{ backgroundImage: 'url("https://source.unsplash.com/H5PnIYI_1I0/1920x1080")', backgroundSize: 'cover', height: '100vh' }}>
      <h1 className="text-center mb-4 p-5" style={{ fontFamily: "Space Grotesk",color: "white",fontSize: "52px" }}>Welcome to Your App</h1>
      
      <div className="text-center">
        <Dropdown style={{ fontFamily: "Space Grotesk" }}>
          <Dropdown.Toggle variant="danger" id="dropdown-basic" style={{ fontSize: "32px"}}>
            Select an Option
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/voter" style={{ fontSize: "32px"}}>Voter</Dropdown.Item>
            <Dropdown.Item href="/form" style={{ fontSize: "32px"}}>Form</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default Main;
