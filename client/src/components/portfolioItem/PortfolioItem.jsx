import "./portfolioItem.css";
import {useState, useRef} from 'react'
import ModalPortfolio from "../modalPortfolio/ModalPortfolio";

const PortfolioItem = ({ img, link, video }) => {
  const [show, setShow] = useState({show: false, video: ""})
	
  const changeModal = (e) => {
		const video = e.target.id
		setShow({show:true, video: video})
  }
    const setLink = (
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
      {link === null ? (
        <div className="openModal" onClick={(e) => changeModal(e)}>
          <img src={img} alt="" value={video} className="p-img" id={video} />
        </div>
      ) : (
        setLink
      )}
    </div>
		{ !show.show ? null : <ModalPortfolio show={show} setShow={setShow}/> }
    
    </>

  );
};

export default PortfolioItem;
