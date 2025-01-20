import './SecureBox.scss';
import b8 from '../../assets/images/b8.png'
import b9 from '../../assets/images/b9.png'
import b10 from '../../assets/images/b10.png'
import b11 from '../../assets/images/b11.png'

const SecureBox = () => {
    const data = [
        {
            title: "Fast Delivery all across the country",
            image: b9
        },
        {
            title: "Safe Payment",
            image: b11
        },
        {
            title: "7 Days Return Policy",
            image: b10
        },
        {
            title: "100% Authentic Product",
            image: b8
        },
    ]
  return (
    <div className="secure_box">
        {
            data.map((item, index) => (
                <div key={index} className="box">
                    <img src={item.image} alt="" />
                    <h3>{item.title}</h3>
                </div>
            ))
        }
    </div>
  )
}

export default SecureBox