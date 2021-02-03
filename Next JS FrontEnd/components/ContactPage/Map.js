import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Styles from "../../styles/Contact.module.scss";

const mapStyles = {
  width: "80%",
  height: "100%",
};

function GoogleMap() {
  const [userLocation, setLocation] = useState({
    longituide: "",
    latituide: "",
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLocation({
          longituide: position.coords.longitude,
          latituide: position.coords.latituide,
        });
      });
    }
  }, []);
  return (
    <div>
      <div>
        <Map
          google={google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: userLocation.latituide,
            lng: userLocation.longitude,
          }}
        >
          <Marker name={"This is test name"} />
        </Map>
      </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDOTuZWLNaP930IeXGDMRghAoDpBBnddY8",
})(GoogleMap);
