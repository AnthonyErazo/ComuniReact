import React from "react";

const SvgBlock = ({ svg }) => {
  const SvgIcon = `../src/assets/service/${svg}`;

  const rbStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    position: "relative"
  };

  const svgStyles = {
    width: "100%",
    height: "auto",
  };

  const mediaQueryStyles = `
    @media only screen and (max-width: 48em) {
      #svgBlock {
        display: none;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div id="svgBlock" style={rbStyles}>
        <img src={SvgIcon} alt="Services" style={svgStyles} />
      </div>
    </>
  );
};

export default SvgBlock;
