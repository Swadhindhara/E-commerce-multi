import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import slide1 from '../../assets/images/slide1.webp';
import slide2 from '../../assets/images/slide2.webp'
import slide3 from '../../assets/images/slide3.webp'
import a1 from '../../assets/images/a1.webp'
import a2 from '../../assets/images/a2.webp'
import a3 from '../../assets/images/a3.webp'
import a4 from '../../assets/images/a4.webp'
import a5 from '../../assets/images/a5.webp'
import a6 from '../../assets/images/a6.webp'
import a7 from '../../assets/images/a7.webp'
import a8 from '../../assets/images/a8.webp'
import a9 from '../../assets/images/a9.webp'
import a10 from '../../assets/images/a10.webp'
import a11 from '../../assets/images/a11.webp'
import a12 from '../../assets/images/a12.webp'
import a13 from '../../assets/images/a13.webp'
import a14 from '../../assets/images/a14.webp'
import a15 from '../../assets/images/a15.webp'
import a16 from '../../assets/images/a16.webp'
import a17 from '../../assets/images/a17.webp'
import a18 from '../../assets/images/a18.webp'
import a19 from '../../assets/images/a19.webp'
import a20 from '../../assets/images/a20.webp'
import a21 from '../../assets/images/a21.webp'
import a22 from '../../assets/images/a22.webp'
import a23 from '../../assets/images/a23.webp'
import b1 from '../../assets/images/b1.webp'
import b2 from '../../assets/images/b2.webp'
import b3 from '../../assets/images/b3.webp'
import b4 from '../../assets/images/b4.webp'
import b5 from '../../assets/images/b5.webp'
import b6 from '../../assets/images/b6.webp'
import b7 from '../../assets/images/b7.webp'
import './Home.scss';
import { FeaturedCard, FooterBox, LatestProduct, SecureBox, SellerCard } from '@/_components';
import { Link } from 'react-router-dom';
import { LiaAngleRightSolid } from "react-icons/lia";
import { Button } from '@/components/ui/button';
const Home = () => {
  const featuredProducts = [
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a2,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a1,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a3,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a4,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a9,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a5,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a6,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a7,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a8,
    },
    {
      title: 'Honor X14 Plus Laptop',
      price: '12,999',
      image: a10,
    },
  ]

  const category = [
    {
      image: a11,
      title: "Men's Fashion"
    },
    {
      image: a12,
      title: "Women's Fashion"
    },
    {
      image: a13,
      title: "Kid's Fashion"
    },
    {
      image: a14,
      title: "Health & Beauty"
    },
    {
      image: a15,
      title: "Pet Supplies"
    },
    {
      image: a16,
      title: "Home & Kitchen"
    },
    {
      image: a17,
      title: "Baby & Toddler"
    },
    {
      image: a18,
      title: "Sports & Outdoor"
    },
  ]

  const seller = [
    {
      name: "FootStore",
      rating: "5",
      reviews: "2",
      products: "12",
      logo: a22,
      banner: b3
    },
    {
      name: "Phone Store",
      rating: "5",
      reviews: "2",
      products: "12",
      logo: a21,
      banner: b2
    },
    {
      name: "FootStore",
      rating: "5",
      reviews: "2",
      products: "12",
      logo: a19,
      banner: b4
    },
    {
      name: "FootStore",
      rating: "5",
      reviews: "2",
      products: "12",
      logo: a20,
      banner: b5
    },
  ]

  const dod = [
    {
      name: "Exquisite 18K White Gold Diamond Necklace Set",
      image: a23,
      mrp: "18,999",
      price: "15,999",
      discount: "-12%"
    }
  ]

  const latestProduct = [
    {
      "name": "Edelbrock Cylinder Head",
      "price": 720.00,
      "original_price": 900.00,
      "discount": "20%",
      "image": a2
    },
    {
      "name": "Combo Trailer Light Set",
      "price": 35.00,
      "original_price": null,
      "discount": null,
      "image": a3
    },
    {
      "name": "Waterproof Seat Protector",
      "price": 25.00,
      "original_price": null,
      "discount": null,
      "image": a1
    },
    {
      "name": "HP BOSS CRATE ENGINE",
      "price": 2500.00,
      "original_price": null,
      "discount": null,
      "image": a5
    },
    {
      "name": "Car Interior LED Lights",
      "price": 30.00,
      "original_price": null,
      "discount": null,
      "image": a6
    },
    {
      "name": "Lug White Spoke Wheel",
      "price": 80.00,
      "original_price": null,
      "discount": null,
      "image": a3
    },
    {
      "name": "Storage Large Tool Box",
      "price": 60.00,
      "original_price": null,
      "discount": null,
      "image": a4
    },
    {
      "name": "Daily Maintenance Hardware",
      "price": 50.00,
      "original_price": null,
      "discount": null,
      "image": a7
    }, {
      "name": "Waterproof Seat Protector",
      "price": 25.00,
      "original_price": null,
      "discount": null,
      "image": a1
    },
    {
      "name": "HP BOSS CRATE ENGINE",
      "price": 2500.00,
      "original_price": null,
      "discount": null,
      "image": a5
    },
  ]



  return (
    <>
      <div className="home_container">
        <div className="max-w-[1600px] mx-auto">
          {/* ============== Section 1 ====================== */}
          <div className="home_section1">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              speed={1000}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper h-[25dvh] lg:h-[70dvh]"
            >
              <SwiperSlide><img className='w-full h-full object-cover' src={slide1} alt="" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src={slide2} alt="" /></SwiperSlide>
              <SwiperSlide><img className='w-full h-full object-cover' src={slide3} alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/*=============== Section 2 ====================== */}
        <div className="home_section2_container">
          <div className="home_section2 max-w-[1600px] mx-auto">
            <div className="box">
              <h3>Featured Products</h3>
              <div className="view">
                <Link to={'/products'}>View All <LiaAngleRightSolid /></Link>
              </div>
              <Swiper
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                slidesPerView={6.5}
                speed={1200}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                pagination={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                {
                  featuredProducts.map((product, index) => (
                    <SwiperSlide key={index}>
                      <FeaturedCard image={product.image} price={product.price} title={product.title} />
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
        {/* ============== Section 3 ====================== */}
        <div className="home_section3_container">
          <div className="home_section3 max-w-[1600px] mx-auto">
            <div className="boxes">
              <div className="view">
                <h3>Categories</h3>
                <Link to='/categories'>View All <LiaAngleRightSolid /></Link>
              </div>
              <div className="slab">
                {
                  category.map((item, index) => (
                    <div className="box" key={index}>
                      <div className="icon">
                        <img src={item.image} alt="" />
                      </div>
                      <p>{item.title}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* ================ Section 4 =====================*/}
        <div className="home_section4_container">
          <div className="home_section4 max-w-[1600px] mx-auto">
            <Link>
              <img src={b1} alt="" />
            </Link>
          </div>
        </div>
        {/* ================ Section 5 ==================== */}
        <div className="home_section5_container">
          <div className="home_section5 max-w-[1600px] mx-auto">
            <div className="box">
              <div className="view">
                <h3>Top Sellers</h3>
                <Link to={'/sellers'}>View All <LiaAngleRightSolid /></Link>
              </div>
              <div className="slab">
                {
                  seller.map((item, index) => (
                    <SellerCard key={index} logo={item.logo} banner={item.banner} name={item.name} rating={item.rating} reviews={item.reviews} products={item.products} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* ================ Section 6 ==================== */}
        <div className="home_section6_container">
          <div className="home_section6 max-w-[1600px] mx-auto">
            <div className="left">
              <h3>DEAL OF THE DAY</h3>
              {
                dod.map((item, index) => (
                  <div className="card" key={index}>
                    <div className="top">
                      <img src={item.image} alt="" />
                      <div className="discount">{item.discount}</div>
                    </div>
                    <div className="bottom">
                      <h4>{item.name}</h4>
                      <div className="price">
                        <small>₹{item.mrp}</small>
                        <span>₹{item.price}</span>
                      </div>
                      <Button className='bg-[#2196f3]'>BUY NOW</Button>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="right">
              <div className="view">
                <h3>Latests Products</h3>
                <Link to='/products'>View All <LiaAngleRightSolid /></Link>
              </div>

              <div className="boxes">
                {
                  latestProduct.map((item, index) => (
                    <LatestProduct key={index} price={item.price} name={item.name} mrp={item.original_price} discount={item.discount} image={item.image} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* ================ Section 7 ==================== */}
        <div className="home_section7_container">
          <div className="home_section7 max-w-[1600px] mx-auto">
            <div className="left">
              <img src={b6} alt="image" />
            </div>
            <div className="right">
              <img src={b7} alt="image" />
            </div>
          </div>
        </div>
        {/* ================ Section 8 ==================== */}
        <div className="home_section8_container">
          <div className="home_section8 mx-auto max-w-[1600px]">
            <div className="boxes">
              <div className="view">
                <h3>women&apos;s fashion</h3>
                <Link to={'/products'}>View All <LiaAngleRightSolid /></Link>
              </div>
              <div className="slab">
                {
                  featuredProducts.slice(0, 6).map((product, index) => (
                    <FeaturedCard key={index} image={product.image} price={product.price} title={product.title} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* ================ Section 9 =================== */}
        <div className="home_section8_container">
          <div className="home_section8 mx-auto max-w-[1600px]">
            <div className="boxes">
              <div className="view">
                <h3>Electronics & Gadgets</h3>
                <Link to={'/products'}>View All <LiaAngleRightSolid /></Link>
              </div>
              <div className="slab">
                {
                  featuredProducts.slice(0, 6).map((product, index) => (
                    <FeaturedCard key={index} image={product.image} price={product.price} title={product.title} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* ================ Section 10 =================== */}
        <div className="home_section8_container">
          <div className="home_section8 mx-auto max-w-[1600px]">
            <div className="boxes">
              <div className="view">
                <h3>Home & Kitchen</h3>
                <Link to={'/products'}>View All <LiaAngleRightSolid /></Link>
              </div>
              <div className="slab">
                {
                  featuredProducts.slice(0, 6).map((product, index) => (
                    <FeaturedCard key={index} image={product.image} price={product.price} title={product.title} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        {/* ================ Section 11 ================== */}
        <div className="home_section11_container">
          <div className="home_section11 mx-auto max-w-[1600px]">
                <SecureBox/>
                <FooterBox/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home