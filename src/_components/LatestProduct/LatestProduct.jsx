import './LatestProduct.scss';
import { FaEye } from "react-icons/fa";

const LatestProduct = ({ image, discount, mrp, price, name }) => {
    return (
        <div className="latest_product">
            <div className="top">
                <img src={image} alt="" />
                <div className="overlay">
                    <div className="icon">
                        <FaEye/>
                    </div>
                </div>
                {discount && <div className="discount">{discount}</div>}
                {/* <div className="discount">{discount}</div> */}
            </div>
            <div className="bottom">
                <p>{name}</p>
                <div className="price">
                    {mrp && <small>₹{mrp}</small>}
                    <span>₹{price}</span>
                </div>
            </div>
        </div>
    )
}

export default LatestProduct