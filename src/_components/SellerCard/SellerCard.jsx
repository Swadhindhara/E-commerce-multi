import './SellerCard.scss';
import { RiStarFill } from "react-icons/ri";
const SellerCard = ({ logo, banner, name, rating, products, reviews }) => {
    return (
        <div className="seller_card">
            <div className="top">
                <img src={banner} alt="" />
            </div>
            <div className="bottom">
                <div className="details">
                    <div className="icon">
                        <img src={logo} alt="" />
                    </div>
                    <div className="content">
                        <h3>{name}</h3>
                        <div className="rating">
                            {rating}
                            <RiStarFill />
                            &nbsp;
                            <small>Rating</small>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="switch"><span>{reviews}</span> Reviews</div>
                    <div className="switch"><span>{products}</span> Products</div>
                </div>
            </div>
        </div>
    )
}

export default SellerCard