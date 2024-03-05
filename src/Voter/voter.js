import WebFont from "webfontloader";
import { useEffect } from "react";
import Cards from "../cards/cards";
import '../App.css';
// import abstractPhoto from "../../public/abstract.avif"

export default function Voter() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Space Grotesk"],
      },
    });
  }, []);

  const backgroundStyle = {
    backgroundImage: "url(/abstract.avif)",
    backgroundSize: "cover",
    // filter: 'brightness(50%)'
    // Add other styles if needed
  };
  const profileImage = {
    img: "/profile.avif",
  };

  return (
    <div>
      <section class="home-slider owl-carousel img" style={backgroundStyle}>
        <div class="slider-item">
          <div class="overlay"></div>
          <div class="container border-bottom pt-2 pb-2 rounded">
            <div
              class="row slider-text align-items-center"
              data-scrollax-parent="true"
            >
              <div class="col-md-6 col-sm-12 ftco-animate">
                <span class="subheading" style={{ fontFamily: "Chilanka" }}>
                  Golu Yadav{" "}
                </span>
                <h1 class="mb-4" style={{ fontFamily: "Space Grotesk" }}>
                  HarraiPatti
                </h1>
                <p class="mb-4 mb-md-5" style={{ fontFamily: "Chilanka" }}>
                  All data from village name Harraipatti and their voters
                  present in this village
                </p>
              </div>
              <div class="col-md-6 ftco-animate">

                <img
                  src={profileImage.img}
                  class="img-fluid  rounded-2  w-25"
                  alt=""
                  width={330}
                  height="auto"
                  style={{ maxWidth: "100%" }}
                  />
                  
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cards/>

      
    </div>
  );
}
