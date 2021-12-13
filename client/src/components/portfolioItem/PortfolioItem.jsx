import "./portfolioItem.css";
import React, { useState } from "react";
import ModalPortfolio from "../modalPortfolio/ModalPortfolio";

const PortfolioItem = ({ img, link, project }) => {
  const [show, setShow] = useState({ show: false, project: "" });

  const changeModal = (e) => {
    const project = e.target.id;
    setShow({ show: true, project: project });
  };

  const modal = (
    <div className="openModal" onClick={(e) => changeModal(e)}>
      <img src={img} alt="" value={project} className="p-img" id={project} />
    </div>
  );

  const normal = (
    <a href={link} target="_blank" rel="noreferrer noopener nofollow">
      <img src={img} alt="" className="p-img" />
    </a>
  );

  return (
    <>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        {!link ? modal : normal}
      </div>
      {!show.show ? null : <ModalPortfolio show={show} setShow={setShow} img={img} />}
    </>
  );
};

export default PortfolioItem;
