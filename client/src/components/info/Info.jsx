import "./info.css"

const Info = () => {
    return (
         <div className="info">
             <div className="info-left">
                 <div className="info-left-wrapper">
                     <h2 className="info-intro">Hello, My name is</h2>
                     <h1 className="info-name">Jesús Sánchez</h1>
                     <div className="info-title">
                         <div className="info-title-wrapper">
                             <div className="info-title-item">Web developer</div>
                             <div className="info-title-item">Front end</div>
                             <div className="info-title-item">Full Stack</div>
                             <div className="info-title-item">Seo</div>
                         </div>
                     </div>
                     <p className="info-desc">
                        I design and develop services for customers
                     </p>
                 </div>
                 {/* Crear svg pegar y dar la clase info-scroll */}
             </div>
             <div className="info-rigth">
                 <div className="info-bg"></div>
                 <img src="" alt="" className="info-img" />
             </div>
         </div>
    )
}

export default Info