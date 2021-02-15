import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

export default function Map({ locations }) {
  // console.log(process.env.NEXT_PUBLIC_MPBOX_SECRET_KEY);
  const [viewport, setViewport] = useState({
    width: "87%",
    height: "100%",
    // The latitude and longitude of the center of London
    // latitude: 51.5074,
    // longitude: -0.1278,
    latitude: 31.582045,
    longitude: 74.329376,
    zoom: 10,
  });
  const [selectLocation, setSelectedLocation] = useState({});

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MPBOX_SECRET_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {locations.map((location) => (
        <div key={location.id}>
          <Marker latitude={location.center[1]} longitude={location.center[0]}>
            <a
              onClick={() => {
                setSelectedLocation(location);
              }}
            >
              <span role="img" aria-label="push-pin">
                📌
              </span>
            </a>
          </Marker>
          {selectLocation.id === location.id ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={location.center[1]}
              longitude={location.center[0]}
            >
              {location.place_name}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

// import React, { useState, useEffect } from "react";
// import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
// import Styles from "../../styles/Contact.module.scss";

// const mapStyles = {
//   width: "80%",
//   height: "100%",
// };

// function GoogleMap() {
//   const [userLocation, setLocation] = useState({
//     longituide: "",
//     latituide: "",
//   });
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition(function (position) {
//         console.log("Latitude is :", position.coords.latitude);
//         console.log("Longitude is :", position.coords.longitude);
//         setLocation({
//           longituide: position.coords.longitude,
//           latituide: position.coords.latituide,
//         });
//       });
//     }
//   }, []);
//   return (
//     <div>
//       <div>
//         <Map
//           google={google}
//           zoom={14}
//           style={mapStyles}
//           initialCenter={{
//             lat: userLocation.latituide,
//             lng: userLocation.longitude,
//           }}
//         >
//           <Marker name={"This is test name"} />
//         </Map>
//       </div>
//     </div>
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDOTuZWLNaP930IeXGDMRghAoDpBBnddY8",
// })(GoogleMap);
