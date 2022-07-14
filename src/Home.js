import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsGlobe2, BsFillTelephoneFill } from "react-icons/bs";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header>
        <img className="logo" src="img/logo.png" alt="" />
      </header>
      <div className="section">
        <div className="block1">
          <img src="img/1.png" alt="" />
        </div>
        <div className="block2">
          <div className="p">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </div>
          <img src="img/2.png" alt="" />
          <p>
            Government of India has awarded the
            <b>"National Energy Conservation Award 2018".</b>Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>
      </div>
      <div className="line">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
        <img className="moters" src="img/3.png" alt="" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr width="95%" size="1" color="red" />
      </div>
      <div className="bLine">
        <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className="p1">
          CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS
          & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
          BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <footer>
        {/* <AiFillFacebook /> */}
        <p>
          <BsFillTelephoneFill />
          Toll Free 1800 200 1234
        </p>
        <a href="www.facebook.com/cripumps">
          <AiFillFacebook />
          www.facebook.com/cripumps
        </a>
        <a href="www.crigroups.com">
          <BsGlobe2 />
          www.crigroups.com
        </a>
      </footer>
    </>
  );
};

export default Home;
