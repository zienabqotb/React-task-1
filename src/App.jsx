import Navbar from "./assets/components/Navbar";
import "./App.css";
import { FaFire } from "react-icons/fa";
import Button from "./assets/components/Button";
import Pick from "./assets/components/Pick";
import TwoFace from "./assets/components/TwoFace";
export default function App() {
  return (
    <main>
      <Navbar />
      <section className="container hero-section">
        <div className="content">
          <p>
            <FaFire className="fire-icon" />
            Don't miss limited-time savings:{" "}
            <span className="highlight">Savings 20%</span>{" "}
          </p>
          <h1>Everything for Your Site to Succeed</h1>
          <div className="button-container">
            <Button />
            <div className="information">
              <p className="starting-at">Starting at only</p>
              <span className="highlight price">$4.75/mo*</span>
            </div>
          </div>
        </div>
        <img src="/web.png" className="web" alt="web" />
      </section>
      <Pick/>
      <TwoFace/>
      <section className="support">
        <img src="/last.jpeg" alt="support" />
        <div className=" support-content">
          <h2>24/7/365 Support</h2>
          <p>Sample text. Click to select the Text Element. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Button/>
        </div>
      </section>
    </main>
  );
}
