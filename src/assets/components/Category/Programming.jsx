import React from "react";

function Programming() {
    const Products =[
        {
            name: "Java",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$10",
            category: "Programming",
            imageUrl: "https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png"
        },
        {
            name: "C++",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$15",
            category: "Programming",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        },
        {
            name: "Python",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$20",
            category: "Programming",
            imageUrl: "https://www.ntuclearninghub.com/documents/39367/4216797/Python-Symbol.png/369e410e-a90f-f887-c2dc-61f7ef761476/"
        }
    ]
    return (
        <div className="flex flex-row flex-wrap gap-10">
           {
            // eslint-disable-next-line no-unused-vars
            Products.map((product) =>(
                // eslint-disable-next-line react/jsx-key
                <div className="Card w-[300px] h-[350px] border flex-col flex-wrap hover:shadow-lg duration-300 ease-in-out">
                    <div className="Card-Image flex justify-center align-middle">
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
export default Programming;