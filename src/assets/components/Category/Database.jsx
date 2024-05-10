import React from 'react';
import { motion } from 'framer-motion';

function Database() {
    const Products =[
        {
            name: "MySQL",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$10",
            category: "Database",
            imageUrl: "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
        },
        {
            name: "MongoDB",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$15",
            imageUrl: "https://miro.medium.com/v2/resize:fit:610/1*mMq3Bem9r8ASAn1YwcTbEw.png",
            category: "Database",
        },
        {
            name: "PostgreSQL",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$20",
            category: "Database",
            imageUrl: "https://miro.medium.com/v2/resize:fit:610/1*mMq3Bem9r8ASAn1YwcTbEw.png"
        }
    ];

    return (
        <motion.div
            className="flex flex-row flex-wrap gap-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, type: "spring", staggerChildren: 1 }}
        >
           {
            Products.map((product, index) =>(
                <motion.div
                    key={index}
                    className="Card w-[300px] h-[350px] border flex-col flex-wrap hover:shadow-lg duration-300 ease-in-out"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <div className="Card-Image flex justify-center align-middle">
                        <img src={product.imageUrl} className="w-[250px] h-[150px] m-[10px] border-2 object-contain rounded p-[10px]" alt={product.name} />
                    </div>
                    <div className="flex justify-center Card-Content m-[10px] gap-[10px]">
                        <div className="flex flex-row justify-around w-[250px]">
                            <h1 className="px-[10px] text-center text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">{product.category}</h1>
                            <h1 className="px-[10px] text-center text-xl font-semibold bg-yellow-100 text-blue-400 font-bold">{product.price}</h1>
                        </div>
                        <h1 className="px-[10px] bg-blue-100 text-blue-400 font-bold">{product.name}</h1>
                        <h1>{product.description}</h1>
                    </div>
                </motion.div>
            ))
           }
        </motion.div>
    );
}
export default Database;
