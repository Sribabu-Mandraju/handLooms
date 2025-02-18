import React from 'react'
import saree1 from "../../assets/sarees/01-20-200x300.jpg";
import saree2 from "../../assets/sarees/1-182-200x300.jpg";
import saree3 from "../../assets/sarees/1-183-200x300.jpg";
import saree4 from "../../assets/sarees/1-184-200x300.jpg";
import saree5 from "../../assets/sarees/1-185-200x300.jpg";
import saree13 from "../../assets/sarees/brown-2.jpg";
import saree15 from "../../assets/sarees/cyan-2.jpg";
import saree12 from "../../assets/sarees/green-2.jpg";
import Card from '../TrendyProducts/Card';
const LimitedEdition = () => {
  const sarees=  [
        {
          "image1": saree1,
          "image2": "",
          "title1": "Venkatagiri Silk Saree",
          "title2": "Venkatagiri Silk Saree",
          "actualprice": "₹17,940",
          "saleprice": "₹14,352",
          "discount": "20%"
        },
        {
          "image1": saree2,
          "image2": "",
          "title1": "Venkatagiri Silk Saree",
          "title2": "Venkatagiri Silk Saree",
          "actualprice": "₹14,630",
          "saleprice": "₹11,704",
          "discount": "20%"
        },
        {
          "image1": saree4,
          "image2": "",
          "title1": "Madhavaram Silk Saree",
          "title2": "Madhavaram Silk Saree",
          "actualprice": "₹16,575",
          "saleprice": "₹13,260",
          "discount": "20%"
        },
        {
          "image1": saree3,
          "image2": "",
          "title1": "Madhavaram Silk Saree",
          "title2": "Madhavaram Silk Saree",
          "actualprice": "₹16,185",
          "saleprice": "₹12,948",
          "discount": "20%"
        },
        {
          "image1": saree5,
          "image2": "",
          "title1": "Venkatagiri Silk Saree",
          "title2": "Venkatagiri Silk Saree",
          "actualprice": "₹14,630",
          "saleprice": "₹11,704",
          "discount": "20%"
        },
        {
          "image1": saree12,
          "image2": "",
          "title1": "Venkatagiri Silk Saree",
          "title2": "Venkatagiri Silk Saree",
          "actualprice": "₹15,405",
          "saleprice": "₹12,324",
          "discount": "20%"
        },
        {
          "image1": saree13,
          "image2": "",
          "title1": "Venkatagiri Silk Saree",
          "title2": "Venkatagiri Silk Saree",
          "actualprice": "₹15,405",
          "saleprice": "₹12,324",
          "discount": "20%"
        },
        {
          "image1": saree15,
          "image2": "",
          "title1": "Madhavaram Silk Saree",
          "title2": "Madhavaram Silk Saree",
          "actualprice": "₹16,575",
          "saleprice": "₹13,260",
          "discount": "20%"
        }
      ]
      
  return (
    <div className='lg:px-[100px]'>
        <h2 className='font-bold text-3xl text-center py-[20px]'>Limited Edition</h2>
        
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

export default LimitedEdition;