import React, { useRef, useEffect } from "react";
import "./home.css";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import img1 from "../assets/Biology-copy.webp";
import img2 from "../assets/English-Vocabulary-Exercises.jpg";
import img3 from "../assets/Nature-960x640.jpg";
import img4 from "../assets/Top-IT-Skills-2030.png";
import img5 from "../assets/13_5383.jpg";
import img6 from "../assets/current.jpg";
import img7 from "../assets/Nature-960x640.jpg";
import img8 from "../assets/geograph.jpg";
import img9 from "../assets/movielistquiz.jpg";
import img10 from "../assets/Maths-Camp-copy-1030x324.png";
import logo from "../assets/SRTLL.png";
import QuizListPrivate from "../components/QuizList/QuizListPrivate";
import QuizListPublic from "../components/QuizList/QuizListPublic";
import { Link } from "react-router-dom";
import Forall from "./Forall";


const Forall = () => {
  return (
    <> <div className="toolbar_container">
    <div className="toolbar toolbar-active">
      <div className="toolbar__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="toolbar__switcher">
        <Link
          to="/"
          className="toolbar__switcher__item toolbar__switcher__item--active"
        >
          For all
        </Link>
        <Link to="/atwork" className="toolbar__switcher__item ">
          At work
        </Link>
        <Link to="/atschool" className="toolbar__switcher__item ">
          At School
        </Link>
        <Link to="/athome" className="toolbar__switcher__item ">
          At Home
        </Link>
      </div>
      <div className="toolbar__section">
        <div className="slide_container is-draggable flickity-enabled">
          <div className="slide_container_inner">
            <div
              className="carousel slide_container_inner "
              ref={flickityRef}
            >
              {/* Carousel items */}
              <Link to="/" className="toolbar__tile">
                <img src={img1} alt="" />
              </Link>
              <Link to="/" className="toolbar__tile">
                <img src={img2} alt="" />
              </Link>
              <Link to="/" className="toolbar__tile">
                <img src={img3} alt="" />
              </Link>
              <Link to="/" className="toolbar__tile">
                <img src={img4} alt="" />
              </Link>{" "}
              <Link to="/" className="toolbar__tile">
                <img src={img5} alt="" />
              </Link>{" "}
              <Link to="/" className="toolbar__tile">
                <img src={img6} alt="" />
              </Link>{" "}
              <Link to="/" className="toolbar__tile">
                <img src={img7} alt="" />
              </Link>{" "}
              <Link to="/" className="toolbar__tile">
                <img src={img8} alt="" />
              </Link>
              {/* Add more carousel items as needed */}
            </div>
          </div>
        </div>
        <div className="toolbar__section__box-shadow--left"></div>
        <div className="toolbar__section__box-shadow--right"></div>
      </div>

      <div className="toolbar__buttons">
        <Link
          to="/createquiz"
          className="toolbar__buttons__create"
          onClick={handleClearLocalStorage}
        >
          <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/create_icon.png"
            alt=""
          />
        </Link>

        <Link to="/takequiz" className="toolbar__buttons__join">
          <img
            src="https://kahoot.com/wp-content/themes/kahoot2017/assets/img/enter_pin_logo.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  </div>
</>
  )
}

export default Forall