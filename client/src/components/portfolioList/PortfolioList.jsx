import PortfolioItem from "../portfolioItem/PortfolioItem"
import "./portfolioList.css"
import { portfolioItem } from "../../data"

const PortfolioList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title"></h1>
                <p className="pl-desc"></p>
            </div>
            <div className="pl-list">
                {
                    portfolioItem.map((item) => (
                        <PortfolioItem key={item.id} img={item.img} link={item.link} />
                    ))
                }
            </div>
        </div>
    )
}

export default PortfolioList