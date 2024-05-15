import React from "react";
import { motion } from "framer-motion";

function Programming() {
    const Products = [
        {
            name: "C",
            description: "A powerful programming language commonly used for system programming.",
            price: "$40",
            category: "Programming",
            imageUrl: "https://seeklogo.com/images/C/c-programming-language-logo-9B32D017B1-seeklogo.com.png"
        },
        {
            name: "C++",
            description: "An extension of the C programming language with object-oriented features.",
            price: "$40",
            category: "Programming",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        },
        {
            name: "C#",
            description: "A modern, versatile programming language developed by Microsoft.",
            price: "$70",
            category: "Programming",
            imageUrl: "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
        },
        {
            name: "Python",
            description: "A high-level programming language known for its simplicity and readability.",
            price: "$70",
            category: "Programming",
            imageUrl: "https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
        },
        {
            name: "Java",
            description: "A robust, platform-independent programming language commonly used for enterprise applications.",
            price: "$70",
            category: "Programming",
            imageUrl: "https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png"
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
                Products.map((product, index) => (
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

export default Programming;
