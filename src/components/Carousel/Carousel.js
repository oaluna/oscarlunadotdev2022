import { useReducer } from "react";
import PropTypes from "prop-types";

import personal from "../../assets/personal.svg";
import blog from "../../assets/blog.svg";
import freelancing from "../../assets/freelancing.svg";

import "./Carousel.css";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "GOTO_START_INDEX":
      return Object.assign({}, state, { index: 0 });
    case "GOTO_END_INDEX":
      return Object.assign({}, state, {
        index: action.payload
      });
    case "INCREMENT_INDEX":
      return Object.assign({}, state, {
        index: state.index + 1
      });
    case "DECREMENT_INDEX":
      return Object.assign({}, state, {
        index: state.index - 1
      });
    default:
      return state;
  }
};

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    style={{
      fontSize: "32px",
      display: "flex",
      flexDirection: "row",
      position: "relative",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between"
    }}
    className={`slide-arrow ${direction}`}
    onClick={clickFunction}
  >
    {glyph}
  </div>
);

const FadedImageSlide = ({ url, imageCaptions }) => {
  const styles = {
    height: "450px",
    width: "500px",
    opacity: "0.5",
    background: "rgba(255,255,255,0.4)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "15px",
    backgroundImage: `url(${url})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backdropFilter: "blur(40px)",
    margin: "40px"
  };

  return <div className="image-slide" style={styles} />;
};

const ImageSlide = ({ url, imageCaptions }) => {
  const styles = {
    minHeight: "450px",
    minWidth: "500px",
    background: "rgba(181,249,253, 0.4)",
    border: "1px solid rgba(181, 249, 253, 0.2)",
    borderRadius: "15px",
    backgroundImage: `url(${url})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backdropFilter: "blur(40px)",
    transform: "scale(1.2)",
    transition: "0.3s ease-in-out",
    zIndex: "10",
    marginTop: "40px"
  };

  return <div className="image-slide" style={styles} />;
};

function Carousel() {
  const [{ index }, dispatch] = useReducer(reducer, {
    index: 0
  });

  const imageUrls = [blog, freelancing, personal];

  const imageCaptions = ["Freelancing", "Personal Projects", "Blog"];

  return (
    <div className="carousel">
      <div className="carousel-cards" style={{ display: "flex" }}>
        <FadedImageSlide
          url={
            index === 0 ? imageUrls[imageUrls.length - 1] : imageUrls[index - 1]
          }
        />
        <div className="label">
          <h4>
            {index === 0
              ? imageCaptions[imageCaptions.length - 1]
              : imageCaptions[index - 1]}
          </h4>
        </div>
        <ImageSlide url={imageUrls[index]} />
        <FadedImageSlide
          url={
            index === imageUrls.length - 1 ? imageUrls[0] : imageUrls[index + 1]
          }
        />
      </div>
      <div className="arrow-container">
        <Arrow
          className="left-arrow"
          direction="left"
          clickFunction={() =>
            index === 0
              ? dispatch({
                  type: "GOTO_END_INDEX",
                  payload: imageUrls.length - 1
                })
              : dispatch({ type: "DECREMENT_INDEX" })
          }
          glyph="&#9664;"
        />
        <Arrow
          className="right-arrow"
          direction="right"
          clickFunction={() =>
            index === imageUrls.length - 1
              ? dispatch({ type: "GOTO_START_INDEX" })
              : dispatch({ type: "INCREMENT_INDEX" })
          }
          glyph="&#9654;"
        />
      </div>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired,
  glyph: PropTypes.string.isRequired
};

export default Carousel;
