import React, { Fragment, useState } from "react";
import { useContext } from "react";
import { FcCheckmark } from "react-icons/fc";
import { Container } from "./NavBar";
import "../Styles/Pricing.css";

function Pricing() {
  const { toggle } = useContext(Container);
  const [toggleBasic, setToogleBasic] = useState(true);
  const [toggleStandard, setToggleStandard] = useState(true);
  const [togglePremium, setTogglePremium] = useState(true);

  const [basicCost, setBasicCost] = useState("7.99");
  const [StandardCost, setStandardCost] = useState("12.99");
  const [premiumCost, setPremiumCost] = useState("18.99");

  return (
    <Fragment>
      <div className={toggle ? "mainBgcolor" : "secondaryBgColor"}>
        <div className="Pricing-container">
          <div className={toggle ? "Pricing-option1" : "light-Theme1"}></div>
          <h2>Basic</h2>
          <div className="Price">
            <h3>{basicCost}</h3>
            <h4 id="MonthlyYearly">{toggleBasic ? "/Monthly" : "/Yearly"}</h4>
          </div>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              Ulimaited film and tv programmes
            </FcCheckmark>
          </span>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              Watch on mobile phones and tablets
            </FcCheckmark>
          </span>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              Cancel at anytime
            </FcCheckmark>
          </span>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              First month completely free
            </FcCheckmark>
          </span>
          <button id="button1">Buy Now</button>
          <div id="darktheme">
            <div
              className="Pricing-yearly-darktheme"
              onClick={() => {
                setToogleBasic(!toggleBasic);
                if (toggleBasic) {
                  setToogleBasic("60");
                } else {
                  setBasicCost("7.99");
                }
              }}
            >
              <div
                className={
                  toggleBasic ? "Pricing-monthly-dark" : "Pricing-monthly-light"
                }
              ></div>
            </div>
          </div>

          {/* ######################################################################################### */}
          <div className={toggle ? "Pricing-option2" : "light-Theme2"}></div>
          <h2>Standard</h2>
          <div className="Price">
            <h3>{StandardCost}</h3>
            <h4 id="MonthlyYearly">
              {toggleStandard ? "/Monthly" : "/Yearly"}
            </h4>
          </div>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              Ulimaited film and tv programmes
            </FcCheckmark>
          </span>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              Watch on mobile phones and tablets
            </FcCheckmark>
          </span>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              Cancel at anytime
            </FcCheckmark>
          </span>
          <span>
            <FcCheckmark fontSize={25} id="checkmark">
              First month completely free
            </FcCheckmark>
          </span>
          <button id="button2">Buy Now</button>
          <div id="darktheme">
            <div
              className="Pricing-yearly-darktheme"
              onClick={() => {
                setToggleStandard(!toggleStandard);
                if (toggleStandard) {
                  setToogleBasic("60");
                } else {
                  setBasicCost("7.99");
                }
              }}
            >
              <div
                className={
                  toggleStandard
                    ? "Pricing-monthly-dark"
                    : "Pricing-monthly-light"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Pricing;
