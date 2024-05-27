import React from "react";

const TextBlock = ({ topic, title, subText, children }) => {
  const lbStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "50%",
    lineHeight: 1.5,
    color: "var(--white)",
    position: "relative",
  };

  const topicStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--nav)",
    color: "var(--white)",
    fontWeight: 700,
    fontSize: "calc(0.4rem + 0.4vw)",
    padding: "0.5rem 1rem",
    borderRadius: "20px",
  };

  const circleStyles = {
    display: "inline-block",
    width: "1rem",
    height: "1rem",
    borderRadius: "50%",
    backgroundColor: "var(--purple)",
    marginRight: "0.5rem",
  };

  const titleStyles = {
    fontSize: "calc(1rem + 1vw)",
    lineHeight: 1.2,
    padding: "0.5rem 0",
  };

  const subTextStyles = {
    fontSize: "calc(0.5rem + 0.5vw)",
    color: "var(--nav2)",
  };

  const mediaQueryStyles = `
    @media only screen and (max-width: 48em) {
      #leftBlock {
        width: 100%;
        align-items: center;
        text-align: center;
      }

      #leftBlock span {
        font-size: calc(0.4rem + 0.8vw);
      }

      #leftBlock div:nth-of-type(2) {
        font-size: calc(1rem + 1.5vw);
      }

      #leftBlock div:nth-of-type(3) {
        font-size: calc(0.5rem + 1vw);
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div id="leftBlock" style={lbStyles}>
        <div style={topicStyles}>
          <span style={circleStyles} />
          <span>{topic}</span>
        </div>
        <div style={titleStyles}>{title}</div>
        <div style={subTextStyles}>{subText}</div>
        {children}
      </div>
    </>
  );
};

export default TextBlock;
