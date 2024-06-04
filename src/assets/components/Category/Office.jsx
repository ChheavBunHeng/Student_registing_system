import React from "react";
import {motion} from "framer-motion";
function Office() {
    const Products = [
      {
          "name": "Internet & E-Mail",
          "description": "Learn efficient internet and email usage, online research, email management, and etiquette.",
          "price": "$10",
          "category": "Office",
          "imageUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSe3_AIWJKDmUalKxp2_xA0I62U_pvUQjKDD6f3LPVGzaodXPcS"
      },
      {
          "name": "Microsoft Word",
          "description": "Unleash your creativity with powerful word editing and design features, offering precise control over your documents.",
          "price": "$15",
          "category": "Office",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png"
      },
      {
          "name": "Microsoft Excel",
          "description": "Master basic to advanced skills for managing and analyzing data in spreadsheets effectively.",
          "price": "$15",
          "category": "Office",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png"
      },
      {
          "name": "Microsoft Powerpoint",
          "description": "Acquire essential skills for creating impactful presentations and adding engaging content.",
          "price": "$15",
          "category": "Office",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png"
      },
      {
          "name": "Microsoft Access I",
          "description": "Gain proficiency in managing databases and data analysis using Microsoft Access.",
          "price": "$35",
          "category": "Office",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1200px-Microsoft_Office_Access_%282019-present%29.svg.png"
      },
      {
          "name": "Microsoft Access II",
          "description": "Advance your database management skills, including data entry and retrieval techniques.",
          "price": "$40",
          "category": "Office",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1200px-Microsoft_Office_Access_%282019-present%29.svg.png"
      },
      {
          "name": "Microsoft Access I + II",
          "description": "Comprehensive course covering advanced database management skills using Microsoft Access.",
          "price": "$70",
          "category": "Office",
          "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Microsoft_Office_Access_%282019-present%29.svg/1200px-Microsoft_Office_Access_%282019-present%29.svg.png"
      },
      {
          "name": "Word + Excel + Powerpoint",
          "description": "Essential training in Word, Excel, and PowerPoint for effective office productivity.",
          "price": "$38.5",
          "category": "Office",
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIs-xVVCqFfuPcH0c9E1LVbasnnwNMTJ3ULTFw8T8cPmNoQeS"
      },
      {
          "name": "Microsoft Publisher",
          "description": "Develop professional document creation skills, including formatting, layout, and content management, with Microsoft Publisher.",
          "price": "$15",
          "category": "Office",
          "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFZkf7EOArYGpKJmJuMviQs_V-e7V-1vYlIToxOf0hA&s"
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

export default Office;
