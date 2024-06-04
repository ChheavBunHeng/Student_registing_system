import React from 'react';
import { motion } from "framer-motion";

function Account() {
    const Products = [
        {
            name: "Peach tree Accounting",
            description: "A comprehensive accounting software offering precise control and powerful features.",
            price: "$45",
            category: "Accounting",
            imageUrl: "https://businessyield.com/wp-content/uploads/2021/06/peachtreebySage.jpg"
        },
        {
            name: "QuickBooks Premium",
            description: "A feature-rich accounting solution providing precise control and powerful tools.",
            price: "$45",
            category: "Accounting",
            imageUrl: "https://rksbusiness.com/wp-content/uploads/2022/09/QuickBooks-Logo-Preferred-RGB.png"
        },
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

export default Account;
