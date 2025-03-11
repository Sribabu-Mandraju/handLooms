import React from "react";
import man1 from "../../assets/mallassets/vision-img.webp";
import img1 from "../../assets/mallassets/grid-1.webp";
import img2 from "../../assets/mallassets/grid-2.webp";
import img3 from "../../assets/mallassets/grid-3.webp";
import img4 from "../../assets/mallassets/grid-4.jpg";
import img5 from "../../assets/mallassets/grid-5.webp";
import img6 from "../../assets/mallassets/grid-6.webp";
import img7 from "../../assets/mallassets/grid-7.webp";
import img8 from "../../assets/mallassets/grid-8.webp";
import man2 from "../../assets/mallassets/man-2.webp";
// import Card from "./Card";

const Mall = () => {
  const grid_data = [
    { name: "YARN", image: img1 },
    { name: "HAND SPINNING", image: img2 },
    { name: "DYEING", image: img3 },
    { name: "BOBBIN WINDING", image: img4 },
    { name: "WARPING", image: img5 },
    { name: "STREET SIZING", image: img6 },
    { name: "WEFT WIDING", image: img7 },
    { name: "WEAVING", image: img8 },
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="  w-full">
        <div className="w-full  mt-5 max-w-6xl rounded-md mx-auto px-4 bg-[#101828] text-center py-8 sm:px-20 flex flex-col ">
          <h2 className="text-2xl font-bold mb-4 w-full text-white py-2  md:px-56 md:px-auto mx-auto ">
            Our Story: Woven by Hand, Empowered by Heart
          </h2>
          <p className="font-medium text-sm sm:px-20 py-2 w-full text-white  md:px-56 md:px-auto mx-auto">
            At USHA Int'l and Smart Village Products, we bring the world the
            beauty and heritage of handcrafted products made by skilled artisans
            from rural India. From vibrant saris to unique village crafts, every
            item is a celebration of traditional craftsmanship. Each purchase
            empowers our artisans, supports fair wages, and helps sustain their
            livelihoods.
          </p>
        </div>
      </div>

      {/* Middle section with image and text */}
      <div className="flex flex-col md:flex-row bg-white px-[4vw] justify-center items-center  my-4">
        <div className="w-full md:w-1/2 max-h-[350px] overflow-clip  ">
          <img
            src={man1}
            className="w-full overflow-clip rounded-l-lg"
            alt="Artisan with colorful textiles"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 text-left p-6 md:p-10 md:pl-16">
          <h2 className="font-bold text-2xl mb-6 text-black">
            Meet Our Artisans
          </h2>
          <p className="text-gray-700 leading-relaxed font-medium">
            Every product from USHA - Smart Village products is a work of art
            made by dedicated artisans, mostly women, from India's rural
            villages. Through your purchase, you support their dreams, preserve
            traditional crafts, and help them build a sustainable future.
          </p>
        </div>
      </div>
      <div className="px-[4vw] rounded-xl">
        <div className="bg-[#101828] text-center w-full text-white py-4 rounded-xl">
          <p className="font-medium px-4 py-2 max-w-4xl mx-auto">
            If you have ever visited a village of weavers, you would get to know
            the dextrous Indian Textile weaving wonders. If you haven't, let's
            get into the fabulous ride of the preparatory phases:
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 px-[4vw] gap-x-6 gap-y-10 my-10">
        {grid_data.map((item, index) => (
          <Card item={item} />
        ))}
      </div>

      <div className="px-[4vw] rounded-xl">
        <div className="bg-[#101828] text-center w-full text-white py-4  rounded-xl">
          <p className="font-medium px-4 py-2 sm:px-20 py-2 max-w-4xl mx-auto">
            Pure Cotton Christmas Bed Sheets from Project India - the Mori
            Villages. Endorsed by Usha Training cum Production Center.
          </p>
        </div>
      </div>
 
      <div className="flex flex-col w-full max-w-6xl mx-auto md:flex-row rounded-md bg-white px-[4vw] justify-center items-center  my-4">
        <div className="w-full md:w-1/2 max-h-[350px] overflow-clip  ">
          <img
            src={man2}
            className="w-full overflow-clip rounded-l-lg"
            alt="Artisan with colorful textiles"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 text-left p-6 md:p-10 md:pl-16">
          <p className="text-gray-700 leading-relaxed font-medium">
            Celebrate this festive season with our beautifully crafted Pure
            Cotton Christmas Bed Sheets, handwoven by skilled artisans from the
            Mori villages, empowering women through Usha Training cum Production
            Center.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            By purchasing these bed sheets, you’re not just getting a product;
            you’re directly supporting the livelihoods of women artisans in
            rural India. Every bed sheet sold helps empower women through
            skill-building and sustainable livelihood opportunities
          </p>
        </div>
      </div>
      <div className="px-[4vw] rounded-xl">
        <div className="bg-[#101828] text-center w-full text-white py-4  rounded-xl">
          <p className="font-medium px-4 sm:px-20 py-2 max-w-4xl mx-auto">
            This Christmas, gift more than just beautiful linens—gift hope,
            empowerment, and a brighter future for rural women.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mall;

const Card = ({ item }) => {
  return (
    <div className="flex flex-col gap-y-10 font-semibold text-xl ">
      <img src={item.image} className="rounded-t-lg w-full h-[300px] " />
      <p className="text-center text-gray-900">{item.name}</p>
    </div>
  );
};
