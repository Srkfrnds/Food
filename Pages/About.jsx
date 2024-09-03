/* eslint-disable react/prop-types */
import aboutImg1 from '../assets/about-2.png'
import aboutImg2 from '../assets/about-3.png'
import aboutImg3 from '../assets/about-4.png'
import aboutImg from '../assets/about-1.png'
import 'react-multi-carousel/lib/styles.css';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Carousel from 'react-multi-carousel';
import icon1 from '../assets/icon-1.svg'
import icon2 from '../assets/icon-2.svg';
import icon3 from '../assets/icon-3.svg';
import icon4 from '../assets/icon-4.svg';
import icon5 from '../assets/icon-5.svg';
import icon6 from '../assets/icon-6.svg';
import about5 from '../assets/about-5.png';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import clinet1 from '../assets/clinet1.jpg'
import clinet2 from '../assets/client2.jpg'
import { Link } from 'react-router-dom';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
const cardData = [
  {
    id: 1,
    icon: icon1,
    title: 'Best Prices & Offers',
    description:
      'We offer competitive prices and exclusive deals, ensuring you get the best value for your money.',
  },
  {
    id: 2,
    icon: icon2,
    title: 'Wide Assortment',
    description:
      "Our wide range of products caters to every need and preference, making it easy to find what you're looking for.",
  },
  {
    id: 3,
    icon: icon3,
    title: 'Free Delivery',
    description:
      'We provide free shipping on all orders, making your online shopping experience more cost-effective.',
  },
  {
    id: 4,
    icon: icon4,
    title: 'Easy Returns',
    description:
      'Our hassle-free return policy ensures a smooth and convenient return process for our customers.',
  },
  {
    id: 5,
    icon: icon5,
    title: '100% Satisfaction',
    description:
      'We strive to deliver excellent service and ensure 100% satisfaction for all our customers.',
  },
  {
    id: 6,
    icon: icon6,
    title: 'Great Daily Deals',
    description:
      'Our daily deals offer significant savings on a wide variety of products, giving you great value every day.',
  },
];
const aboutCount = [
  {
    count: 15,
    title: 'Glorious years',
  },
  {
    count: 100,
    title: 'Happy Customers',
  },
  {
    count: 50,
    title: 'Projects complete',
  },
  {
    count: 10,
    title: 'Team advisor',
  },
  {
    count: 15,
    title: 'Products Sale',
  },
];

const About = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const countUpRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setViewPortEntered(true);
      } else {
        setViewPortEntered(false);
      }
    },
    { root: null, rootMargin: '0px', threshold: 0.1 }
  );

  if (countUpRef.current) {
    observer.observe(countUpRef.current);
  }

  return () => {
    if (countUpRef.current) {
      observer.unobserve(countUpRef.current);
    }
  };
}, []);
  return (
    <div>
      <div className='about-top pt-16 mb-[50px] dark:text-white'>
        <div className='w-[85%] mx-auto flex items-center'>
          <div className='flex-none w-1/2'>
            <img src={aboutImg} alt='about' className='rounded-2xl w-[90%]' />
          </div>
          <div className='w-1/2'>
            <div className=''>
              <h2 className='text-[#253D4E] font-semibold leading-[1.2] text-[40px] mb-4 dark:text-white'>
                Welcome to Nest
              </h2>
              <p className='mb-4 dark:text-white'>
                Nest is a leading provider of innovative solutions in the tech
                industry. We are committed to delivering high-quality services
                that meet the needs of our clients.
              </p>
              <p className='mb-4 dark:text-white'>
                Our team is composed of highly skilled professionals who are
                dedicated to achieving excellence in every project. We believe
                in the power of technology to transform businesses and improve
                lives.
              </p>
              <p className='mb-4 dark:text-white'>
                Our mission is to help our clients succeed in their respective
                industries by providing them with cutting-edge solutions. We
                strive to stay ahead of the curve by continuously innovating and
                improving our services.
              </p>
              <p className='mb-[50px] dark:text-white'>
                We value our relationships with our clients and work hard to
                ensure their complete satisfaction. We understand that our
                success is tied directly to the success of our clients.
              </p>
              <div className='relative'>
                <Carousel
                  responsive={responsive}
                  showDots={false}
                  infinite
                  autoPlay
                  draggable={false}
                  autoPlaySpeed={2500}
                  customLeftArrow={<CustomLeftArrow />}
                  customRightArrow={<CustomRightArrow />}
                >
                  <div className='p-2'>
                    <img src={aboutImg1} alt='' />
                  </div>
                  <div className='p-2'>
                    <img src={aboutImg2} alt='' />
                  </div>
                  <div className='p-2'>
                    <img src={aboutImg3} alt='' />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center about-card mb-[90px] mt-[90px] w-[85%] mx-auto dark:text-white'>
        <h2 className='title style-3 mb-[40px] dark:text-white'>
          What We Provide?
        </h2>
        <div className='flex justify-between flex-wrap'>
          {cardData.map((card, index) => (
            <div key={index} className='w-[30%] mb-[24px]'>
              <div className='featured-card dark:bg-[#111827]  flex flex-col justify-center items-center'>
                <img src={card.icon} alt='' />
                <h4 className='dark:text-white'>{card.title}</h4>
                <p className='dark:text-white'>{card.description}</p>
                <Link to={'#'}>Read more</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-auto w-[85%] flex items-center mb-[60px] dark:text-white'>
        <div className='w-7/12 pr-8'>
          <img src={about5} alt='' className='w-full' />
        </div>
        <div className='partner-details w-[33%]'>
          <h4 className='mb-[15px] text-muted text-[24px] dark:text-white'>
            Our performance
          </h4>
          <h1 className='heading-1 mb-[30px] dark:text-white'>
            Your Partner for e-commerce grocery solution
          </h1>
          <p className='dark:text-white'>
            We are a leading provider of e-commerce solutions for the grocery
            industry. Our platform is designed to make online grocery shopping
            easy and convenient for both businesses and consumers.
          </p>
          <p className='dark:text-white'>
            Our team is dedicated to delivering high-quality service and support
            to ensure our clients can effectively manage their online grocery
            operations.
          </p>
        </div>
      </div>

      <div className='mx-auto w-[85%] flex items-center justify-around mt-[20px] mb-[20px] dark:text-white'>
        <div className='w-[30%] dark:text-white'>
          <h3 className='text-[#253D4E] font-semibold leading-[1.2] text-[32px] mb-[20px] dark:text-white'>
            Who we are
          </h3>
          <p className='dark:text-white'>
            We are a team of dedicated professionals with a passion for
            technology and innovation. Our mission is to revolutionize the
            grocery industry by providing cutting-edge e-commerce solutions.
          </p>
        </div>
        <div className='w-[30%] dark:text-white'>
          <h3 className='text-[#253D4E] font-semibold leading-[1.2] text-[32px] mb-[20px] dark:text-white'>
            Our history
          </h3>
          <p className='dark:text-white'>
            Founded in 2010, we have spent the last decade working closely with
            grocery businesses to understand their needs and challenges. This
            has allowed us to develop a platform that truly meets the demands of
            the industry.
          </p>
        </div>
        <div className='w-[30%] dark:text-white'>
          <h3 className='text-[#253D4E] font-semibold leading-[1.2] text-[32px] mb-[20px] dark:text-white'>
            Our mission
          </h3>
          <p className='dark:text-white'>
            Our mission is to make online grocery shopping a seamless
            experience. We aim to empower businesses with the tools they need to
            succeed in the digital age, while also making grocery shopping more
            convenient for consumers.
          </p>
        </div>
      </div>

      <div
        className='about-count flex items-center justify-between my-[30px] dark:text-white'
        ref={countUpRef}
      >
        {aboutCount.map((count, index) => (
          <div
            key={index}
            className='w-[20%] text-center text-index dark:text-white'
          >
            <h1 className='heading-1 dark:text-white'>
              <CountUp
                end={viewPortEntered ? count.count : 0}
                start={0}
                suffix={count.plus ? '+' : '+'}
                duration={5}
                redraw={true}
              >
                {({ countUpRef, start }) => {
                  if (viewPortEntered) {
                    start();
                  }
                  return <span ref={countUpRef} />;
                }}
              </CountUp>
            </h1>
            <h4>{count.title}</h4>
          </div>
        ))}
      </div>

      <div className='mx-auto w-[85%] mt-[60px] dark:text-white'>
        <h2 className='title style-3 mb-[40px]  text-center dark:text-white'>
          Our Team
        </h2>
        <div className='flex flex-wrap justify-center gap-2'>
          <div className='left w-[35%] dark:text-white'>
            <h6 className='mb-[5px] text-brand font-bold dark:text-white'>
              Our Team
            </h6>
            <h1 className='mb-[30px] text-[#253D4E] font-bold leading-snug text-[48px] dark:text-white'>
              Meet Our Expert Team
            </h1>
            <p className='text-base font-normal leading-6 mb-[30px] text-[#7E7E7E] dark:text-white'>
              Our team is composed of industry veterans with years of experience
              in their respective fields. We strive to deliver the best
              solutions for our clients.
            </p>
            <p className='text-base font-normal leading-6 mb-[30px] text-[#7E7E7E] dark:text-white'>
              We believe in the power of collaboration and innovation. Our team
              members are always ready to go the extra mile to ensure client
              satisfaction.
            </p>
            <Link to={'#'} className='btn dark:text-white'>
              View All Members
            </Link>
          </div>
          <div className='right w-[60%] flex'>
            <div className='w-1/2 p-2'>
              <div className='team-card'>
                <img src={clinet1} alt='' className='w-full rounded-2xl' />
                <div className='content text-center'>
                  <h4 className='mb-5 '>Hunter King</h4>
                  <span className='text-[16px] '>CEO &amp; Co-Founder</span>
                  <div className='social-network mt-5 flex justify-center space-x-2 gap-3'>
                    <Link to='#'>
                      <FaTwitter size={20} color='#29A56C' />
                    </Link>
                    <Link to='#'>
                      <FaInstagram size={20} color='#29A56C' />
                    </Link>
                    <Link to='#'>
                      <FaYoutube size={20} color='#29A56C' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/2 p-2'>
              <div className='team-card'>
                <img src={clinet2} alt='' className='w-full rounded-2xl' />
                <div className='content text-center'>
                  <h4 className='mb-5 '>Dilan Specter</h4>
                  <span className='text-[18px] '>Head Engineer</span>
                  <div className='social-network mt-5 flex justify-center space-x-2 gap-3'>
                    <Link to='#'>
                      <FaTwitter size={20} color='#29A56C' />
                    </Link>
                    <Link to='#'>
                      <FaInstagram size={20} color='#29A56C' />
                    </Link>
                    <Link to='#'>
                      <FaYoutube size={20} color='#29A56C' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CustomLeftArrow = ({ onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#3BB77E] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#3BB77E] hover:text-white'
  >
    <FiArrowLeft />
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    type='button'
    onClick={onClick}
    className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F2F3F4] text-[#3BB77E] rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-[#3BB77E] hover:text-white'
  >
    <FiArrowRight />
  </button>
);

export default About;
