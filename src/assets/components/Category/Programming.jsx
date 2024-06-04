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
            description: "A robust, platform-independent used for enterprise applications.",
            price: "$70",
            category: "Programming",
            imageUrl: "data:image/png;base64,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"
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

export default Programming;
