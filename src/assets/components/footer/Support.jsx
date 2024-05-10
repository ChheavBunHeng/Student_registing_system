import React from "react";

function Support() {
    return (
        <div className="p-8">
            <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
                <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
                <div className="space-y-12 px-2 xl:px-16 mt-12">
                    {faqData.map((item, index) => (
                        <div key={index} className="mt-4 flex">
                            <div>
                                <div className="flex items-center h-16 border-l-4 border-blue-600">
                                    <span className="text-4xl text-blue-600 px-4">Q.</span>
                                </div>
                                <div className="flex items-center h-16 border-l-4 border-gray-400">
                                    <span className="text-4xl text-gray-400 px-4">A.</span>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center h-16">
                                    <span className="text-lg text-blue-600 font-bold">{item.question}</span>
                                </div>
                                <div className="flex items-center py-2">
                                    <span className="text-gray-500">{item.answer}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Example FAQ data
const faqData = [
    {
        question: "Lorem ipsum dolor sit amet?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
    },
    {
        question: "Consectetur adipisicing elit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
    },
    {
        question: "Neque eos, dignissimos provident reiciendis debitis?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
    },
    {
        question: "Repudiandae commodi perferendis et itaque?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
    },
    {
        question: "Similique fugiat cumque?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
    },
    {
        question: "Impedit iusto vitae dolorum, nostrum fugit?",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!"
    }
];

export default Support;
