import React from 'react';

function Account() {
    const Products =[
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

export default Account;