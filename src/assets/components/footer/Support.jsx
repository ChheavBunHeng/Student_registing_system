import React from "react";

const faqData = [
    {
        question: "What are the operating hours of the school?",
        answer: "The school operates during the following hours: Monday through Friday from 7:30 AM to 7:30 PM, and on weekends from 8:30 AM to 6:30 PM."
    },
    {
        question: "Is there a uniform policy?",
        answer: "No, our school does not have a uniform policy. Students are not required to adhere to any specific dress code."
    },
    {
        question: "Are there any extracurricular activities available?",
        answer: "Yes, we encourage students to explore their interests beyond the curriculum. While we don't have formal extracurricular programs, we support students in pursuing their passions and hobbies independently."
    },
    {
        question: "How can parents get involved in school activities?",
        answer: "Parents are welcome to participate in various school events and activities based on their interests and availability. They can collaborate with teachers and staff to contribute ideas or support student initiatives."
    },
    {
        question: "What is the school's policy on absences and tardiness?",
        answer: "Students are allowed up to 15 absences per semester. Exceeding this limit may result in removal from the school system or require repayment of 50% of the original course fee."
    },
    {
        question: "How are discipline issues handled?",
        answer: "We prioritize creating a positive and inclusive learning environment. Discipline issues, if any, are addressed on a case-by-case basis with a focus on understanding and resolution rather than punitive measures. We aim to foster mutual respect and responsibility among students."
    }
    
];

function Support() {
    return (
        <div className="p-8">
            <div className="bg-white p-4 rounded-lg border shadow-lg py-8 mt-12">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h4>
                <p className="text-center text-gray-700 text-sm mt-2">Here are some of the frequently asked questions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="space-x-8 mt-8">
                            <div>
                                <h4 className="text-xl font-bold text-gray-700">{item.question}</h4>
                                <p className="text-gray-600 my-2">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Support;
