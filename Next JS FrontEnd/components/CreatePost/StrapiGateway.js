import React from "react";
import ReactLoading from "react-loading";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const StripeGateway = ({ user }) => {
  React.useEffect(() => {
    handleClick();
  }, []);
  const handleClick = async () => {
    // Call your backend to create the Checkout session.
    const { sessionId } = await fetch("/api/checkout/sessions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: 1, user: user }),
    }).then((res) =>
      res.json(console.log("in response block", res, sessionId))
    );
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
  };
  return (
    <div
      className="page-container"
      style={{
        margin: "2rem",
        textAlign: "center",
        fontWeight: "bolder",
        fontSize: "1.3rem",
        fontFamily: "Verdana",
      }}
    >
      Loading Payment Gateway
      <div style={{ textAlign: "center", marginLeft: "36rem" }}>
        <ReactLoading
          type={"bubbles"}
          color={"rgb(65, 65, 255)"}
          height={"25%"}
          width={"15%"}
        />
      </div>
    </div>
  );
};

export default StripeGateway;
