import './FeaturedCard.scss';
import { FaEye } from "react-icons/fa";
const FeaturedCard = ({image, title, price}) => {
    return (
        <div className="featured_card">
            <div className="top">
                <img src={image} alt="" />
                <div className="overlay">
                    <div className="icon">
                        <FaEye />
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>{title}</p>
                <h4><span>₹</span> {price}</h4>
            </div>
        </div>
    )
}

export default FeaturedCard