import React from "react";
import "./Office.css";
function Office() {
    const Products = [
        {
          name: "Internet & E-Mail", 
          description: "teaches the basics of using the internet and email efficiently, online research, email management, and etiquett",
          price: "$10",
          category: "Office",
          imageUrl:"https://res.cloudinary.com/dbulfrlrz/images/f_auto,q_auto/v1707563149/wp-pme/what-is-dmarc/what-is-dmarc.png?_i=AA"
        },
        {
            name: "Microsoft Word", 
            description: "The ultimate tool for word editing and design. Unlock your creativity with powerful features and precise control.",
            price: "$15",
            category: "Office",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
        },
        {
            name: "Microsoft Excel", 
            description: "A Microsoft Excel course covers basic to advanced skills for managing and analyzing data in spreadsheets.",
            price: "$15",
            category: "Office",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
          },
          {
            name: "Microsoft Powerpoint", 
            description: "A PowerPoint course teaches essential skills for creating effective presentations, adding content.",
            price: "$15",
            category: "Office",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png"
          },
          {
            name: "Microsoft Access I", 
            description: "the basics of using Microsoft Access to manage databases and data, and data analysis.",
            price: "$35",
            category: "Office",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1200px-Microsoft_Office_Access_%282019-present%29.svg.png"
          },
          {
            name: "Microsoft Access II",
            description: "advanced skills for managing databases and data, including data entry, data retrieval.",
            price: "$40",
            category: "Office",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1200px-Microsoft_Office_Access_%282019-present%29.svg.png"
          },
          {
            name: "Microsoft Access I + II",
            description: "A Microsoft Access course covers advanced skills for managing databases and data",
            price: "$70",
            category: "Office",
            imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1200px-Microsoft_Office_Access_%282019-present%29.svg.png"
          },
          {
            name: "Word + Excel + Powerpoint",
            description: "A Microsoft Office suite course covers essential skills in Word, Excel, and PowerPoint.",
            price: "$35",
            category: "Office",
            imageUrl:"https://img-c.udemycdn.com/course/750x422/2624894_1615.jpg"
          },
          {
            name: "Microsoft Publisher",
            description: "A Microsoft Publisher course covers essential skills for creating professional documents, including formatting, layout, and content management.",
            price: "$15",
            category: "Office",
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFZkf7EOArYGpKJmJuMviQs_V-e7V-1vYlIToxOf0hA&s"
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

export default Office;
