import React from "react";
import "./Office.css";
function Office() {
    const Products = [
        {
          name: "Internet & E-Mail", 
          description: "teaches the basics of using the internet and email efficiently, online research, email management, and etiquett",
          price: "$10",
          category: "Office",
          imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Microsoft Word", 
            description: "The ultimate tool for word editing and design. Unlock your creativity with powerful features and precise control.",
            price: "$15",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            name: "Microsoft Excel", 
            description: "A Microsoft Excel course covers basic to advanced skills for managing and analyzing data in spreadsheets.",
            price: "$15",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Microsoft Powerpoint", 
            description: "A PowerPoint course teaches essential skills for creating effective presentations, adding content.",
            price: "$15",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Microsoft Access I", 
            description: "the basics of using Microsoft Access to manage databases and data, and data analysis.",
            price: "$35",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Microsoft Access II",
            description: "advanced skills for managing databases and data, including data entry, data retrieval.",
            price: "$40",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Microsoft Access I + II",
            description: "A Microsoft Access course covers advanced skills for managing databases and data",
            price: "$70",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Word + Excel + Powerpoint",
            description: "A Microsoft Office suite course covers essential skills in Word, Excel, and PowerPoint.",
            price: "$35",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            name: "Microsoft Publisher",
            description: "A Microsoft Publisher course covers essential skills for creating professional documents, including formatting, layout, and content management.",
            price: "$15",
            category: "Office",
            imageUrl:"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        <img src={product.imageUrl} className="w-[250px] h-[150px] m-[10px] border-r object-cover rounded" />
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
