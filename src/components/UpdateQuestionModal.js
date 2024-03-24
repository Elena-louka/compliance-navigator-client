import React, { useState, useEffect } from 'react';

const UpdateQuestionModal = ({ isOpen, onClose, question, onUpdate }) => {
    const [formData, setFormData] = useState({
        question: '',
        answer: '',
        assignedTo: '',
        properties: '',
        questionDescription: '',
        email: ''
    });

    useEffect(() => {
        if (question) {
            setFormData({
                question: question.Question || '',
                answer: question.Answer || '',
                assignedTo: question['Assigned To'] || '',
                properties: question.Properties || '',
                questionDescription: question['Question Description'] || '',
                email: question['Updated By'] || ''
            });
        }
    }, [question]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedData = {
            Question: formData.question,
            Answer: formData.answer,
            'Assigned To': formData.assignedTo,
            Properties: formData.properties,
            'Question Description': formData.questionDescription,
            "Updated By": formData.email,
        };
        onUpdate(question.id, updatedData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Update Question</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
                        <input id="question" name="question" type="text" value={formData.question} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
                        <textarea id="answer" name="answer" value={formData.answer} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="assignedTo" className="block text-sm font-medium text-gray-700">Assigned To</label>
                        <input
                            id="assignedTo"
                            name="assignedTo"
                            type="email"
                            value={formData.assignedTo}
                            onChange={handleChange}
                            placeholder="user@example.com" 
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="userl@example.com"
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="properties" className="block text-sm font-medium text-gray-700">Properties</label>
                        <input id="properties" name="properties" type="text" value={formData.properties} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="questionDescription" className="block text-sm font-medium text-gray-700">Question Description</label>
                        <textarea id="questionDescription" name="questionDescription" value={formData.questionDescription} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="button" onClick={onClose} className="py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none">Cancel</button>
                        <button type="submit" className="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">Update Question</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateQuestionModal;
