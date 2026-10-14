import './pick.css';
import { GoArrowRight } from "react-icons/go";
import { PiClockCountdownFill } from "react-icons/pi";
import { AiFillSecurityScan } from "react-icons/ai";
import { RiComputerLine } from "react-icons/ri";
import { TbCloudComputing } from "react-icons/tb";


export default function Pick() {
  const plans=[{ icon: <PiClockCountdownFill className="icon" />, title: "Maximum Performance" },
  { icon: <AiFillSecurityScan className="icon" />, title: "Fully Secure Data Centers" },
  { icon:<RiComputerLine className="icon" /> , title: "DDos Attack Prevention" },
  { icon: <TbCloudComputing className="icon" />, title: "Get Unmetered Bandwidth" }
  ]
    return (
    <section className="container pick-section">
        <h2>Pick your perfect web hosting plan</h2>
      <div className="pick">
        {plans.map((plan, index) => (
          <div key={index} className="plan">
            <i >{plan.icon}</i>
            <h3>{plan.title}</h3>
            <p>Sample text. Click to select the Text Element.</p>
            <GoArrowRight className="click" />
          </div>
        ))}</div>
    </section>
  )
}
