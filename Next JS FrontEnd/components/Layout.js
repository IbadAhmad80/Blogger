import NavBar from "./NavBar";
// import "semantic-ui-css/semantic.min.css";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
