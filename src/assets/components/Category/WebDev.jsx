import React from "react";

function WebDev() {
    const Products =[
        {
            name: "HTML",
            description: "HTML is the standard markup language for Web pages.",
            price: "100",
            category: "Web Dev",
            imageUrl: "https://live.staticflickr.com/8046/8118532145_0a85320808_n.jpg"
        },
        {
            name: "CSS",
            description: "CSS is the language we use to style an HTML document.",
            price: "100",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        },
        {
            name: "JavaScript/JQuery",
            description: "JavaScript is the programming language of the Web.",
            price: "100",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/946px-Javascript_badge.svg.png"
        },
        {
            name: "PHP",
            description: "PHP is a server-side scripting language that is embedded in HTML.",
            price: "100",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
        },
        {
            name: "Bootstrap",
            description: "Bootstrap is a fre and open-source CSS framework directed at responsive, mobile-first front-end web development.",
            price: "100",
            category: "Web Dev",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
        }

    ]
    return (
        <div className="flex flex-row flex-wrap gap-10">
           {
            // eslint-disable-next-line no-unused-vars
            Products.map((product) =>(
                // eslint-disable-next-line react/jsx-key
                <div className="Card w-[300px] h-[350px] border flex-col flex-wrap hover:shadow-lg duration-300 ease-in-out">
                    <div className="Card-imageUrl flex justify-center align-middle">
                    <img src={product.imageUrl} className="w-[250px] h-[150px] m-[10px] border-2 object-contain rounded p-[10px]" />
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
export default WebDev;