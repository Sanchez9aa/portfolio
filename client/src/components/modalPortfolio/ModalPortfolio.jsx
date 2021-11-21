import "./modalPortfolio.css";
import exported from "../../vData";
import { useEffect, useState } from "react";
import {DarkContext} from '../../context'
import { useContext } from "react";

const ModalPortfolio = ({ show, setShow }) => {
  const { vData, linkedin } = exported;
  const [modal, setModal] = useState();

  const dark = useContext(DarkContext)

  useEffect(() => {
    const modale = vData.find((x) => x.video === show.video);
    setModal(modale);
  }, [show.video]);

  if (!show.show) {
    return null;
  }

  return modal === undefined ? null : (
    <div
      className="m-overlay"
      onClick={() => setShow({ ...show, show: !show })}
    >
      <div className={ !dark.state.darkmode ? "m-content" : "m-content darkBg" } onClick={(e) => e.stopPropagation()}>
        <div className="m-header">
          <h2>{modal.header}</h2>
        </div>
        <div className="m-body">
          <div className="m-body-youtube-video">
            <iframe
              src={`https://www.youtube.com/embed/${modal.link}`}
              frameBorder="0"
              allow="accelerometer; autopaly; clipboard-write; encrypted-med"
              allowFullScreen
              title="Embedded Youtube Video"
            />
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
          </div>
        </div>
        <div className="m-footer"></div>
      </div>
    </div>
  );
};

export default ModalPortfolio;