import React from 'react';
import { motion } from 'framer-motion';

function Database() {
    const Products = [
        {
            name: "MySQL",
            description: "A robust relational database management system (RDBMS) known for its reliability and performance.",
            price: "$70",
            category: "Database",
            imageUrl: "https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
        },
        {
            name: "MongoDB",
            description: "A leading NoSQL database offering flexibility and scalability for modern applications.",
            price: "$30",
            category: "Database",
            imageUrl: "https://seeklogo.com/images/M/mongodb-logo-4A71340576-seeklogo.com.png",
        },
        {
            name: "PostgreSQL",
            description: "A powerful open-source relational database known for its advanced features and standards compliance.",
            price: "$30",
            category: "Database",
            imageUrl: "https://miro.medium.com/v2/resize:fit:610/1*mMq3Bem9r8ASAn1YwcTbEw.png"
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
export default Database;
