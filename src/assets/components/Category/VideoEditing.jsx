import React from "react";

function VideoEditing() {
    const Products = [
        {
            name: "Adobe Premiere",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$10",
            category: "Video Editing",
            imageUrl: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRvYmUlMjBwcmVtaWVyZSUyMHByb3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Adobe After Effects",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$15",
            category: "Video Editing",
            imageUrl: "https://images.unsplash.com/photo-1501780392773-287d506245a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWZ0ZXIlMjBlZmZlY3R8ZW58MHx8MHx8fDA%3D"
        },
        {
            name: "Song Vegas",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$20",
            category: "Video Editing",
            imageUrl: "https://media.licdn.com/dms/image/D5612AQFyDcTCGugUdA/article-cover_image-shrink_600_2000/0/1707909229094?e=2147483647&v=beta&t=I7BcT4VuhPhR0xSPcc3-JC3dKSm-xHE16Qcuh0kL1r4"
        },
        {
            name: "Cartoon Animation 4K",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$25",
            category: "Video Editing",
            imageUrl: "https://www.cartoonbrew.com/wp-content/uploads/2022/11/main_cartoonbrew-580x326.jpg"
        },
        {
            name: "Daz 3D Studio",
            description: "The ultimate tool for video editing and prototyping. Create stunning videos with precision and creativity.",
            price: "$30",
            category: "Video Editing",
            imageUrl: "https://upload.wikimedia.org/wikipedia/fr/8/83/Daz_wikipedia.png?20190706135803"  
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
export default VideoEditing;