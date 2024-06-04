import React from "react";
import {motion} from "framer-motion";
function WebDev() {
    const Products =[
        {
            name: "HTML",
            description: "HTML is the standard markup language for Web pages.",
            price: "$30",
            category: "Web Dev",
            imageUrl: "https://live.staticflickr.com/8046/8118532145_0a85320808_n.jpg"
        },
        {
            name: "CSS",
            description: "CSS is the language we use to style an HTML document.",
            price: "$40",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        },
        {
            name: "JavaScript/JQuery",
            description: "JavaScript is the programming language of the Web.",
            price: "$50",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
        },
        {
            name: "PHP",
            description: "PHP is a server-side scripting language that is embedded in HTML.",
            price: "$70",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
        },
        {
            name: "Bootstrap",
            description: "Bootstrap is a fre and open-source CSS framework directed at responsive, mobile-first front-end web development.",
            price: "$40",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
        }

    ]
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
export default WebDev;