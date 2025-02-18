import React from 'react'

import saree12 from "../../assets/sarees/brown-1.jpg";
import saree13 from "../../assets/sarees/brown-2.jpg";
import saree14 from "../../assets/sarees/cyan-1.jpg";
import saree15 from "../../assets/sarees/cyan-2.jpg";
import saree16 from "../../assets/sarees/darkg-1.jpg";
import saree17 from "../../assets/sarees/darkg-2.jpg";
import saree18 from "../../assets/sarees/gray-1.jpg";
import saree19 from "../../assets/sarees/gray-2.jpg";
import saree20 from "../../assets/sarees/green-1.jpg";
import saree21 from "../../assets/sarees/green-2.jpg";
import saree22 from "../../assets/sarees/orange-1.jpg";
import saree23 from "../../assets/sarees/orange-2.jpg";
import saree24 from "../../assets/sarees/yellow-1.jpg";
import saree25 from "../../assets/sarees/yellow-2.jpg";
import Card from './Card';
const BestSellers = () => {
    const sarees = [
        {
          image1: saree12,
          image2: saree13,
          title1: "Chirala Fancy Saree",
          title2: "Chirala Fancy Saree",
          actualprice: "₹7,473",
          saleprice: "₹5,978",
          discount: "20%",
        },
        {
          image1: saree14,
          image2: saree15,
          title1: "Chirala Sico Pattu Saree",
          title2: "Chirala Sico Pattu Saree",
          actualprice: "₹8,510",
          saleprice: "₹6,808",
          discount: "20%",
        },
        {
          image1: saree16,
          image2: saree17,
          title1: "Venkatagiri Sico Saree",
          title2: "Venkatagiri Sico Saree",
          actualprice: "₹5,920",
          saleprice: "₹4,736",
          discount: "20%",
        },
        {
          image1: saree17,
          image2: saree17,
          title1: "Venkatagiri Sico Saree",
          title2: "Venkatagiri Sico Saree",
          actualprice: "₹5,920",
          saleprice: "₹4,736",
          discount: "20%",
        },
        {
          image1: saree18,
          image2: saree19,
          title1: "Venkatagiri Sico Saree",
          title2: "Venkatagiri Sico Saree",
          actualprice: "₹6,825",
          saleprice: "₹5,460",
          discount: "20%",
        },
        {
          image1: saree20,
          image2: saree21,
          title1: "Mangalagiri Sico Saree",
          title2: "Mangalagiri Sico Saree",
          actualprice: "₹4,446",
          saleprice: "₹3,557",
          discount: "20%",
        },
        {
          image1: saree23,
          image2: saree22,
          title1: "Venkatagiri Sico Saree",
          title2: "Venkatagiri Sico Saree",
          actualprice: "₹6,040",
          saleprice: "₹4,832",
          discount: "20%",
        },
        {
          image1: saree24,
          image2: saree25,
          title1: "Madhavaram Sico Saree",
          title2: "Madhavaram Sico Saree",
          actualprice: "₹7,400",
          saleprice: "₹5,920",
          discount: "20%",
        }
      ];
      
  return (
    <div>
    <div className=" flex flex-wrap gap-[20px] justify-center">
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
  </div>
  )
}

export default BestSellers