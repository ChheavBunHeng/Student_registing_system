import React from "react";
import {motion} from "framer-motion";
function Design() 
{
    const Products = [
        {
            name: "Adobe Photoshop I",
            description: "A comprehensive photo editing software with advanced features for professionals.",
            price: "$25",
            category: "Design",
            imageUrl: "https://pngimg.com/d/photoshop_PNG39.png",
        },
        {
            name: "Adobe Photoshop II",
            description: "An advanced version of Adobe Photoshop with enhanced features for creative professionals.",
            price: "$35",
            category: "Design",
            imageUrl: "https://pngimg.com/d/photoshop_PNG39.png",
        },
        {
            name: "Adobe Illustrator",
            description: "A leading software for vector graphics and illustration, trusted by designers worldwide.",
            price: "$15",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCZK1Wuw8y2-nHrnYBVe8FPMgP8G7ADULs61a3Hi-TOMt_XY6k"
        },
        {
            name: "Adobe InDesign",
            description: "A professional layout and design software tailored for publishing and print media.",
            price: "$20",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WuoXXPsE8LVH80Ch0Z-8yg7dkTzOyVKHIcWNR2XheEHavvAK"
        },
        {
            name: "Adobe XD",
            description: "An all-in-one UX/UI design tool for creating interactive prototypes and wireframes.",
            price: "$25",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ER_ijUpMSSjDKdzdkqH2VyZLG62KZzuE7LqUysnB-w&s"
        },
        {
            name: "Corel Draw X24",
            description: "A versatile graphic design software known for its powerful illustration tools and intuitive interface.",
            price: "$30",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJNZ3WddEPpofWvS8UaEaF59lz0sUuXK8bAAaueHDVw&s"
        },
        {
            name: "Adobe Flash",
            description: "A multimedia software platform used for creating interactive content and animations.",
            price: "$35",
            category: "Design",
            imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbA1-NdO90T3SSU-t9TPj4FsaN_LiV5L9j6SlS417GeuTlP5P9"
        },
        {
            name: "AutoCAD 2D",
            description: "A leading CAD software for creating 2D designs and technical drawings with precision.",
            price: "$40",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgsgih8nqyNx1thXPG8l-9mTP3HmlUhRgEzj7FCg0PQ&s"
        },
        {
            name: "AutoCAD 3D",
            description: "A powerful CAD software for creating 3D models and visualizations with accuracy.",
            price: "$45",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRgsgih8nqyNx1thXPG8l-9mTP3HmlUhRgEzj7FCg0PQ&s"
        },
        {
            name: "Google Sketch",
            description: "An intuitive 3D modeling software for architectural and product design.",
            price: "$50",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtuYGO1XuxSbUEy03OFsmDGsf5EyedS5AvqlhFmjSL4bC6HpE_fZnghwS7W1bMbgG9Kg&usqp=CAU"
        },
        {
            name: "D5 Render + Animation",
            description: "A powerful rendering and animation software for architectural visualization and design.",
            price: "$55",
            category: "Design",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1kjbJamnayp7JWXRLsIbgucg_dvxNEuOjHUHys9Xw&s"
        }
    ];
    
    return (
        <motion.div
        className="flex flex-row flex-wrap gap-3 sm:gap-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, type: "spring", staggerChildren: 1 }}
    >
       {
        Products.map((product, index) =>(
            <motion.div
                key={index}
                className="Card flex flex-col justify-center flex-wrap w-[180px] h-[250px] sm:w-[300px] sm:h-[450px] border  hover:shadow-lg duration-300 ease-in-out"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                <div className="Card-Image flex justify-center align-middle">
                    <img src={product.imageUrl} className="w-[100px] sm:w-[250px] sm:h-[150px] sm:m-[10px] border-2 object-cover sm:object-contain rounded p-[10px]" alt={product.name} />
                </div>
                <div className="Card-Content flex justify-center m-[10px] gap-[10px]">
                    <div className="flex flex-row justify-around w-[150px] sm:w-[250px]">
                        <h1 className="px-[1px] font-roboto sm:px-[10px] text-center text-[10px] sm:text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">{product.category}</h1>
                        <h1 className="px-[1px] font-robotosm:px-[10px] text-center text-[10px] sm:text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">{product.price}</h1>
                    </div>
                    <h1 className="px-[10px] bg-blue-100  text-blue-400 text-[8px] sm:text-xl font-bold">{product.name}</h1>
                    <h1 className="text-[10px] sm:text-xl">{product.description}</h1>
                </div>
            </motion.div>
        ))
       }
    </motion.div>    );
}

export default Design;