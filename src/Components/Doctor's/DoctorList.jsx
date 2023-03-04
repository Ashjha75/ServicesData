import React, { useState } from "react";
import Popup from "./Popup.jsx";
import Card from "./Card.jsx";

// _---__________----------________---------______--IMAGES1---______________---------
// import LadyDr1 from "../../Assets/Ladydr1.jpg";
import LadyDr2 from "../../Assets/Ladydr2.webp";
import LadyDr from "../../Assets/Ladydr.webp";
import LadyDr3 from "../../Assets/Ladydr3.jpg";
import LadyDr4 from "../../Assets/LadyDr4.webp";
import LadyDr5 from "../../Assets/Ladydr5.webp";
// import LadyDr6 from "../../Assets/Ladydr-6.webp";
import obesterician from "../../Assets/Pregnancy test-bro.png";
import cardioLogist from "../../Assets/Cardiologist-rafiki.png";
import neurologists from "../../Assets/Doctor-bro.png";

// import LadyDr1 from "../../Assets/Ladydr1.jpg";

import DR1 from "../../Assets/240_F_172186647_e93OQdc8KSoBzIPqfKG0UoJSJhR15HLa-min.jpg";
import DR2 from "../../Assets/dr2.jpg";
import DR3 from "../../Assets/240_F_282721311_yyx96CWXbXsy2XVOFAjZ6jFm8vZrZKjO-min.jpg";
import DR4 from "../../Assets/240_F_291430206_U1vohsIJWJvF3wb1a3uxfYLPCfXMRbum-min.jpg";
import DR5 from "../../Assets/240_F_316428808_Tf4dch8C6t2mciunZDlbCi0qVmdGbxqv-min.jpg";
import DR6 from "../../Assets/240_F_307163137_zZzqR0NLT5M1w7E4CNrAQEo2gnIYYcAN-min.jpg";
import DR7 from "../../Assets/240_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni-min.jpg";
import DR8 from "../../Assets/240_F_328759383_QFBykomIcL0ajmj56hIg3my4ful6JooZ-min.jpg";

// --------------________________________________-------------------------

const DoctorList = () => {
  const [know, setKnow] = useState(false);
  const [know1, setKnow1] = useState(false);
  const handleCards = () => {
    setKnow(!know);
  };
  const handleCards1 = () => {
    setKnow1(!know1);
  };

  const [imagesa, setImagesa] = useState([
    obesterician,
    false,
    "",
    0,
    "No idea",
  ]);
  const handleImgSrc = (e) => {
    const name = e.target.name;
    const exp = e.target.getAttribute("exp");
    const specs = e.target.getAttribute("specs");
    const imgsrc = document.getElementById(e.target.id).src;
    setImagesa([imgsrc, true, name, exp, specs]);
  };

  return (
    <main className="flex flex-col justify-center items-center">
      {/* 1st card -------------- */}
      <div
        className={`bg-gradient-to-r from-[#25a89b] to-[#0b8678ce] my-24 w-[90%] md:w-[97%] rounded-2xl py-5 px-10 border-2 ${
          know ? "h-fit" : "h-[45rem]"
        } delay-150 overflow-hidden`}
      >
        <span className="relative pt-40 md:pt-0">
          <img
            src={obesterician}
            alt="Img"
            className="ml-10 md:ml-0 w-36 h-36 rounded-full border-4 border-[#f3f4f5]  hover:border-8 absolute top-2 md:right-[45%] md:left-[45%] bg-gradient-to-b from-[#f3f4f5] to-[#35978c]"
          />
          <h2 className="pl-2 md:pl-6 pt-40 md:pt-0 text-3xl md:text-4xl font-semibold font-serife text-transparent bg-gradient-to-r from-[#f3f4f5] to-[#b2c1bf]  drop-shadow-2xl w-fit bg-clip-text border-b-8 border-double ">
            Obstetrician
          </h2>
        </span>

        <div className="mt-20 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:gap-y-12 place-items-center">
          <Card
            imagesa={imagesa}
            src={LadyDr}
            name="Dr Natasha "
            exp="7"
            specs="Obesterician"
            handleImgSrc={handleImgSrc}
            id="Dr1"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr2}
            name="Dr. Sneha sharma"
            exp="11"
            specs="Obesterician"
            handleImgSrc={handleImgSrc}
            id="Dr2"
          />
          <Card
            imagesa={imagesa}
            name="Dr vishaka "
            exp="14 "
            specs="Obesterician"
            src={LadyDr3}
            handleImgSrc={handleImgSrc}
            id="Dr3"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr4}
            name="Dr vansi philosy "
            exp="10"
            specs="Obesterician"
            handleImgSrc={handleImgSrc}
            id="Dr4"
          />
          <Card
            imagesa={imagesa}
            src={LadyDr5}
            name="Dr vinota hwer "
            exp="14 "
            specs="Obesterician"
            handleImgSrc={handleImgSrc}
            id="Dr5"
          />
        </div>

        <div className="w-screen  h-[15vh]  z-4 flex justify-center items-center sticky -bottom-5  md:-bottom-9">
          <button
            className=" px-10 h-fit w-fit py-4 rounded-2xl text-white text-lg bg-yellow-400  transform duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-white animate-bounce"
            onClick={handleCards}
          >
            Know {know ? "Less" : "More"}
          </button>
        </div>
      </div>

      {/* ---------------2nd card */}

      <div
        className="bg-gradient-to-r from-[#25a89b] to-[#0b8678ce] my-24 w-[90%] md:w-[97%] rounded-2xl py-5 px-10 border-2  h-fit
        } delay-150 overflow-hidden"
      >
        <span className="relative pt-40 md:pt-0">
          <img
            src={cardioLogist}
            alt="Img"
            className="ml-10 md:ml-0 w-36 h-36 rounded-full border-4 border-[#f3f4f5]  hover:border-8 absolute top-2 md:right-[45%] md:left-[45%] bg-gradient-to-b from-[#f3f4f5] to-[#35978c]"
          />
          <h2 className="pl-6 pt-40 md:pt-0 text-3xl md:text-4xl font-semibold font-serife text-transparent bg-gradient-to-r from-[#f3f4f5] to-[#b2c1bf]  drop-shadow-2xl w-fit bg-clip-text border-b-8 border-double ">
            Cardiologists
          </h2>
        </span>

        <div className="mt-20 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:gap-y-12 place-items-center">
          <Card
            imagesa={imagesa}
            src={DR7}
            handleImgSrc={handleImgSrc}
            id="Dr6"
            name="Dr Rendell dax "
            exp="11 "
            specs="Cardiologist"
          />
          <Card
            imagesa={imagesa}
            src={DR8}
            name="Dr. Sam curran"
            exp="7 "
            specs="Cardiologist"
            handleImgSrc={handleImgSrc}
            id="Dr7"
          />
          <Card
            imagesa={imagesa}
            src={DR5}
            name="Dr. joul vaxq"
            exp="13 "
            specs="Cardiologist"
            handleImgSrc={handleImgSrc}
            id="Dr8"
          />
        </div>
        <div className="w-screen  h-[15vh]  z-40 flex justify-center items-center sticky   -bottom-9    backdrop-blur-md"></div>
      </div>

      {/* 3rd card ------------------------ */}
      <div
        className={`bg-gradient-to-r from-[#25a89b] to-[#0b8678ce] my-24 w-[90%] md:w-[97%] rounded-2xl py-5 px-10 border-2 ${
          know1 ? "h-fit" : "h-[45rem]"
        } delay-150 overflow-hidden`}
      >
        <span className="relative pt-40 md:pt-0">
          <img
            src={neurologists}
            alt="Img"
            className="ml-10 md:ml-0 w-36 h-36 rounded-full border-4 border-[#f3f4f5]  hover:border-8 absolute top-2 md:right-[45%] md:left-[45%] bg-gradient-to-b from-[#f3f4f5] to-[#35978c]"
          />
          <h2 className="pl-6 pt-40 md:pt-0 text-3xl md:text-4xl font-semibold font-serife text-transparent bg-gradient-to-r from-[#f3f4f5] to-[#b2c1bf]  drop-shadow-2xl w-fit bg-clip-text border-b-8 border-double ">
            Neurologists
          </h2>
        </span>

        <div className="mt-20 grid grid-flow-row md:grid-cols-3 grid-cols-1 gap-5 md:gap-y-12 place-items-center">
          <Card
            imagesa={imagesa}
            src={DR4}
            handleImgSrc={handleImgSrc}
            id="Dr9"
            name="Dr Natasha "
            exp="11 "
            specs="Neurologists"
          />
          <Card
            imagesa={imagesa}
            src={DR2}
            handleImgSrc={handleImgSrc}
            id="Dr10"
            name="Dr Rdell ytbr "
            exp="7 "
            specs="Neurologists"
          />
          <Card
            imagesa={imagesa}
            src={DR3}
            handleImgSrc={handleImgSrc}
            id="Dr11"
            name="Dr Yullie "
            exp="9 "
            specs="Neurologists"
          />
          <Card
            imagesa={imagesa}
            src={DR1}
            handleImgSrc={handleImgSrc}
            id="Dr12"
            name="Dr Rafle yuv "
            exp="11 "
            specs="neurologists"
          />
          <Card
            imagesa={imagesa}
            src={DR6}
            name="Dr. Lata"
            exp="12"
            specs="Neurologists"
            handleImgSrc={handleImgSrc}
            id="Dr13"
          />
        </div>

        <div className="w-screen  h-[15vh]  z-4 flex justify-center items-center sticky -bottom-5  md:-bottom-9">
          <button
            className=" px-10 h-fit w-fit py-4 rounded-2xl text-white text-lg bg-yellow-400  transform duration-500 hover:-translate-y-3 border-2 border-transparent hover:border-white animate-bounce"
            onClick={handleCards1}
          >
            Know {know1 ? "Less" : "More"}
          </button>
        </div>
      </div>

      {imagesa[1] ? <Popup imagesa={imagesa} setImagesa={setImagesa} /> : null}
    </main>
  );
};

export default DoctorList;
