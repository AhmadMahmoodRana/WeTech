import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingTechnology = () => {

  const products = [
    {
      id: 1,
      category: "Vegetables",
      imageSrc: "./src/assets/categories_bg-01.jpg",
      impImage: './src/assets/image8-screen.png'
    },
    {
      id: 2,
      category: "Fruits",
      imageSrc: "./src/assets/categories_bg-02.jpg",
      impImage: './src/assets/image6-screen.png'
    },
    {
      id: 3,
      category: "Fish",
      imageSrc: "./src/assets/categories_bg-03.jpg",
      impImage: './src/assets/image3-screen.png'
    },
    {
      id: 4,
      category: "Meats",
      imageSrc: "./src/assets/categories_bg-04.jpg",
      impImage: './src/assets/image1-screen.png'
    },
    {
      id: 5,
      category: "Beverage",
      imageSrc: "./src/assets/categories_bg-01.jpg",
      impImage: './src/assets/image7-screen.png'
    },
    {
      id: 6,
      category: "Drinks",
      imageSrc: "./src/assets/categories_bg-02.jpg",
      impImage: './src/assets/image-screen.png'
    },
    {
      id: 7,
      category: "Pets",
      imageSrc: "./src/assets/categories_bg-03.jpg",
      impImage: './src/assets/image4-screen.png'
    },
    {
      id: 8,
      category: "Toys",
      imageSrc: "./src/assets/categories_bg-04.jpg",
      impImage: './src/assets/image2-screen.png'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Screen width of 1024px or less
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, // Screen width of 768px or less
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480, // Screen width of 480px or less
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className='TrendingTechnology h-[80vh] flex justify-center items-center'>
      <div className='w-[75%] m-auto'>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className='h-[350px] text-black rounded-xl border-2 tech-box'>
              <img src={product.imageSrc} className='rounded-xl absolute w-[236px] h-full z-0' />
              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                <h1 className='text-xl font-semibold z-10'>{product.category}</h1>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Send</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TrendingTechnology;
