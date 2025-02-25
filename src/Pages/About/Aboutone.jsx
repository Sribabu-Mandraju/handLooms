import React from 'react'
import handloomsaree from '../../assets/handloomsaree.jpg'
const Aboutone = () => {
    const products = [
        {
          id: 1,
          name: "handloomsaree",
          image: handloomsaree,
          
        },
        {
          id: 2,
          name: "handloom", 
          image:handloomsaree,
         
        },
        {
          id: 3,
          name: "handloom",
          image:handloomsaree,
        },
        
      ];
  return (
    <div className="grid grid-cols-3 gap-6 p-4">
    {products.map((product) => (
      <div key={product.id} className="border rounded-lg shadow-lg p-4 text-center">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
        <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
       
      </div>
    ))}
  </div>
  )
}

export default Aboutone
