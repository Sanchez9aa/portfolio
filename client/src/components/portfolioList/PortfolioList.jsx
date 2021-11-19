import PortfolioItem from "../portfolioItem/PortfolioItem"
import "./portfolioList.css"
import { portfolioItem } from "../../data"

const PortfolioList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h2 className="pl-title">Desarrollo y Creatividad - Portfolio</h2>
            </div>
            <div className="pl-list">
                {
                    portfolioItem.map((item) => (
                        <PortfolioItem key={item.id} img={item.img} link={item.link} video={item.video} />
                    ))
                }
            </div>
        </div>
    )
}

export default PortfolioList