import React from "react";
import {motion} from "framer-motion";
function VideoEditing() {
    const Products = [
        {
            name: "Adobe Premiere",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$70",
            category: "Video Editing",
            imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvYmUlMjBwcmVtaWVyZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Adobe After Effects",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$70",
            category: "Video Editing",
            imageUrl: "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZ0ZXIlMjBlZmZlY3R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Song Vegas",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$40",
            category: "Video Editing",
            imageUrl: "https://media.licdn.com/dms/image/D5612AQFyDcTCGugUdA/article-cover_image-shrink_600_2000/0/1707909229094?e=2147483647&v=beta&t=I7BcT4VuhPhR0xSPcc3-JC3dKSm-xHE16Qcuh0kL1r4"
        },
        {
            name: "Cartoon Animation 4K",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$70",
            category: "Video Editing",
            imageUrl: "https://www.cartoonbrew.com/wp-content/uploads/2022/11/main_cartoonbrew-580x326.jpg"
        },
        {
            name: "Daz 3D Studio",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$70",
            category: "Video Editing",
            imageUrl: "https://upload.wikimedia.org/wikipedia/fr/8/83/Daz_wikipedia.png?20190706135803"  
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
export default VideoEditing;