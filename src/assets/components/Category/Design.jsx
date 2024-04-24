import React from "react";

function Design() 
{
   const Products =[
    {
        name: "Adobe Photoshop",
        description: "The ultimate tool for photo editing and design. Unlock your creativity with powerful features and precise control.",
        price: "$10",
        category: "Design",
        imageUrl: "https://pngimg.com/d/photoshop_PNG39.png",
    },
    {
        name: "Adobe Illustrator",
        description: "The ultimate tool for vector graphics and illustrations. Create stunning designs with precision and creativity.",
        price: "$15",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZK1Wuw8y2-nHrnYBVe8FPMgP8G7ADULs61a3Hi-TOMt_XY6k"
    },
    {
        name: "Adobe InDesign",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$20",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WuoXXPsE8LVH80Ch0Z-8yg7dkTzOyVKHIcWNR2XheEHavvAK"
    },
    {
        name: "Adobe XD",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$25",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ER_ijUpMSSjDKdzdkqH2VyZLG62KZzuE7LqUysnB-w&s"
    },
    {
        name: "Corel Draw X24",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$30",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJNZ3WddEPpofWvS8UaEaF59lz0sUuXK8bAAaueHDVw&s"
    },
    {
        name: "Adobe Flash",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$35",
        category: "Design",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbA1-NdO90T3SSU-t9TPj4FsaN_LiV5L9j6SlS417GeuTlP5P9"
    },
    {
        name: "AutoCAD 2D",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$40",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgsgih8nqyNx1thXPG8l-9mTP3HmlUhRgEzj7FCg0PQ&s"
    },
    {
        name: "AutoCAD 3D",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$45",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgsgih8nqyNx1thXPG8l-9mTP3HmlUhRgEzj7FCg0PQ&s"
    },
    {
        name: "Google Sketch",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$50",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtuYGO1XuxSbUEy03OFsmDGsf5EyedS5AvqlhFmjSL4bC6HpE_fZnghwS7W1bMbgG9Kg&usqp=CAU"
    },
    {
        name: "D5 Render + Animation",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$55",
        category: "Design",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kjbJamnayp7JWXRLsIbgucg_dvxNEuOjHUHys9Xw&s"
    }
   ]
   return (
    <div className="flex flex-row flex-wrap gap-10">
       {
        // eslint-disable-next-line no-unused-vars
        Products.map((product) =>(
            // eslint-disable-next-line react/jsx-key
            <div className="Card w-[300px] h-[350px] border flex-col flex-wrap hover:shadow-lg duration-300 ease-in-out">
                <div className="Card-Image flex justify-center align-middle">
                <img src={product.imageUrl} className="w-[250px] h-[150px] m-[10px] border-2 object-contain rounded p-[10px]" />
                </div>
                <div className="flex justify-center Card-Content m-[10px] gap-[10px]">
                    <div className="flex flex-row justify-around w-[250px]">
                        <h1 className="px-[10px] text-center text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">{product.category}</h1>
                        <h1 className="px-[10px] text-center text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">{product.price}</h1>
                    </div>
                    <h1 className="px-[10px] bg-blue-100 text-blue-400 font-bold">{product.name}</h1>
                    <h1>{product.description}</h1>
                </div>
            </div>
        ))
       }
    </div>
);
}

export default Design;