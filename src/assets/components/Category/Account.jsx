import React from 'react';
import { motion } from "framer-motion";

function Account() {
    const Products = [
        {
            name: "Peach tree Accounting",
            description: "The ultimate tool for accounting. Unlock your creativity with powerful features and precise control.",
            price: "$10",
            category: "Accounting",
            imageUrl: "https://businessyield.com/wp-content/uploads/2021/06/peachtreebySage.jpg"
        },
        {
            name: "QuickBooks Premium",
            description: "The ultimate tool for accounting. Unlock your creativity with powerful features and precise control.",
            price: "$10",
            category: "Accounting",
            imageUrl: "https://rksbusiness.com/wp-content/uploads/2022/09/QuickBooks-Logo-Preferred-RGB.png"
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

export default Account;
