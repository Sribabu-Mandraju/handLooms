import React from 'react';
import Card from './Card';

import saree1 from "../../assets/sarees/01-20-200x300.jpg";
import saree2 from "../../assets/sarees/1-182-200x300.jpg";
import saree3 from "../../assets/sarees/1-183-200x300.jpg";
import saree4 from "../../assets/sarees/1-184-200x300.jpg";
import saree5 from "../../assets/sarees/1-185-200x300.jpg";
import saree6 from "../../assets/sarees/1-187-200x300.jpg";
import saree7 from "../../assets/sarees/1-395-200x300.jpg";
import saree8 from "../../assets/sarees/1-403-200x300.jpg";


const Onsale = () => {
  const sarees = [
    {
      image1: saree1,
      image2: "",
      title1: "Uppada Cotton Saree",
      title2: "Uppada Jamdhani Cotton Saree",
      actualprice: "₹4,925",
      saleprice: "₹3,940",
      discount: "20%",
    },
    {
      image1: saree2,
      image2: "",
      title1: "Bandar Cotton Saree",
      title2: "Bandar/Polavaram Saree",
      actualprice: "₹2,272",
      saleprice: "₹1,818",
      discount: "20%",
    },
    {
      image1: saree3,
      image2: "",
      title1: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,315",
      saleprice: "₹1,852",
      discount: "20%",
    },
    {
      image1:saree4,
      image2: "",
      title1: "Madhavaram Cotton Saree",
      title2: "Madhavaram Cotton Zari Saree",
      actualprice: "₹4,459",
      saleprice: "₹3,567",
      discount: "20%",
    },
    {
      image1: saree5,
      image2: "",
      title1: "Bandar Cotton Saree",
      title2: "Bandar Saree",
      actualprice: "₹4,940",
      saleprice: "₹3,952",
      discount: "20%",
    },
    {
      image1: saree6,
      image2: "",
      title1: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,760",
      saleprice: "₹2,208",
      discount: "20%",
    },
    {
      image1: saree7,
      image2: "",
      title1: "Rajahmundry Cotton Saree",
      title2: "Rajahmundry Cotton Saree",
      actualprice: "₹2,239",
      saleprice: "₹1,791",
      discount: "20%",
    },
    {
      image1: saree8,
      image2: "",
      title1: "Venkatagiri Cotton Saree",
      title2: "Venkatagiri Cotton Saree",
      actualprice: "₹2,960",
      saleprice: "₹2,368",
      discount: "20%",
    },
  ];

  return (
    <div className="flex flex-wrap gap-[20px] justify-center">
      {sarees.map((item, index) => (
        <Card 
          key={index}
          image1={item.image1} 
          image2={item.image2} 
          title1={item.title1} 
          title2={item.title2} 
          actualprice={item.actualprice} 
          saleprice={item.saleprice} 
          discount={item.discount} 
        />
      ))}
    </div>
  );
};

export default Onsale;
