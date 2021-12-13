import React from "react";
import "./modalPortfolio.css";
import exported from "../../vData";
import { useEffect, useState } from "react";
import {DarkContext} from '../../context'
import { useContext } from "react";

const ModalPortfolio = ({ show, setShow, img }) => {
  const { vData, linkedin } = exported;
  const [modal, setModal] = useState();

  const dark = useContext(DarkContext)

  useEffect(() => {
    const modale = vData.find((x) => x.project === show.project);
    setModal(modale);
  }, [show.project]);

  if (!show.show) {
    return null;
  }

  return modal === undefined ? null : (
    <div
      className="m-overlay"
      onClick={() => setShow({ ...show, show: !show })}
    >
      <div className={ !dark.state.darkmode ? "m-content" : "m-content darkBg " } onClick={(e) => e.stopPropagation()}>
        <div className="m-header">
          <h2>{modal.header}</h2>
        </div>
        <div className={ !dark.state.darkmode ? "m-body" : "m-body darkBg darkBorder" }>
          <div className="m-body-youtube-video">
            { modal.link === "" || !modal.link
              ? <img src={img} className="modal-img" />
              : (
              <iframe
              src={`https://www.youtube.com/embed/${modal.link}`}
              frameBorder="0"
              allow="accelerometer; autopaly; clipboard-write; encrypted-med"
              allowFullScreen
              title="Embedded Youtube Video"
            />)}
          </div>
          <div className="m-body-summary">
            <p>
              <strong>Resumen: </strong>
              {modal.summary}
            </p>
            <p>
              <strong>Frontend: </strong>
              {modal.frontend}
            </p>
            <p>
              <strong>Backend: </strong>
              {modal.backend}
            </p>
            <p>
              <strong>Arquitectura: </strong>
              {modal.arquitectura}
            </p>
          </div>
          <div className="m-body-links">
            <a className={ !dark.state.darkmode ? "m-body-link" : "m-body-link darkShadow darkColor"} 
              href={modal.github}
              alt=""
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              Github
            </a>
            <a
              className={ !dark.state.darkmode ? "m-body-link" : "m-body-link darkShadow darkColor"}
              href={linkedin}
              alt=""
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              Linkedin
            </a>
            {
              !modal.heroku 
              ? null
              : (
                <a
              className={ !dark.state.darkmode ? "m-body-link" : "m-body-link darkShadow darkColor"}
              href={modal.heroku}
              alt=""
              target="_blank"
              rel="nofollow noreferrer noopener"
            >
              Heroku
            </a>
              )
            
            }
          </div>
        </div>
        <div className="m-footer"></div>
      </div>
    </div>
  );
};

export default ModalPortfolio;
