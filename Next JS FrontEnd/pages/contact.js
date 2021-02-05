import React, { useState, useEffect } from "react";
import Accordion from "../components/ContactPage/Accordion";
import Form from "../components/ContactPage/Form";
import styles from "../styles/Contact.module.scss";
import dynamic from "next/dynamic";
import styled from "styled-components";
const Map = dynamic(() => import("../components/ContactPage/Map"), {
  loading: () => "Loading...",
  ssr: false,
});

const access_token =
  "pk.eyJ1IjoiaWJhZGFobWFkIiwiYSI6ImNra3JzNWt2ajBsOXQyb282YTkzNHZic2cifQ.Axi1cRU6bZqpLkvlduR9Cg";
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/greggs.json?access_token=${access_token}&bbox=-0.227654%2C51.464102%2C0.060737%2C51.553421&limit=10`;
// import ReadMore from "../components/HomePage/ReadMore";
export default function Contact() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      await fetch(url)
        .then((response) => response.text())
        .then((res) => JSON.parse(res))
        .then((json) => {
          setLocations(json.features);
        })
        .catch((err) => console.log({ err }));
    };
    fetchLocations();
  }, []);
  return (
    <div>
      <div style={{ margin: "4rem 4rem" }}>
        <div>
          <Form />
        </div>
        <div className={styles.accordion}>
          <h6 className={styles.accordion_heading}>
            Your most asked Questions are here
          </h6>
          <Accordion />
        </div>
      </div>
      <div
        style={{
          margin: "6rem 22rem 4rem 6rem",
          height: "45rem",
          width: "30rem",
        }}
      >
        <Container>
          <Map locations={locations} />
        </Container>
      </div>
    </div>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
