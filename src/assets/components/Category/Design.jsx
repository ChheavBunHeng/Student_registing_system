import React from "react";

function Design() 
{
   const Products =[
    {
        name: "Adobe Photoshop",
        description: "The ultimate tool for photo editing and design. Unlock your creativity with powerful features and precise control.",
        price: "$10",
        category: "Design",
        imageUrl: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Adobe Illustrator",
        description: "The ultimate tool for vector graphics and illustrations. Create stunning designs with precision and creativity.",
        price: "$15",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "Adobe InDesign",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$20",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "Adobe XD",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$25",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "Corel Draw X24",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$30",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "Adobe Flash",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$35",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "AutoCAD 2D",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$40",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "AutoCAD 3D",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$45",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "Google Sketch",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$50",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    },
    {
        name: "D5 Render + Animation",
        description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
        price: "$55",
        category: "Design",
        imageUrl: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
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
                    <img src={product.imageUrl} className="w-[250px] h-[150px] m-[10px] border-r object-cover rounded" />
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