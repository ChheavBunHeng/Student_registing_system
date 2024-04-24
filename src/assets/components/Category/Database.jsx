import React from 'react';

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
            category: "Database",
            imageUrl: "data:image/png;base64,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"
        },
        {
            name: "PostgreSQL",
            description: "The ultimate tool for web design and prototyping. Create stunning designs with precision and creativity.",
            price: "$20",
            category: "Database",
            imageUrl: "https://miro.medium.com/v2/resize:fit:610/1*mMq3Bem9r8ASAn1YwcTbEw.png"
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
export default Database;