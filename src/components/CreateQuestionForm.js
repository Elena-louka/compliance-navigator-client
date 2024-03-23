import React, { useState } from 'react';

const CreateQuestionForm = ({ onSubmit }) => {
    const [question, setQuestion] = useState('');
    const [description, setDescription] = useState('');
    const [properties, setProperties] = useState('');
    const [answer, setAnswer] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ question, description, properties, answer, createdBy: email, companyName });
    // Reset form after submission
    setQuestion('');
    setDescription('');
    setProperties('');
    setAnswer('');
    setEmail('');
    setCompanyName('');
  };

  return (
    <form className="space-y-6 bg-white shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
      {/* Question Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Question</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question"
          required
        />
      </div>

      {/* Description Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the question"
          required
        />
      </div>

      {/* Properties Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Properties</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="text"
          value={properties}
          onChange={(e) => setProperties(e.target.value)}
          placeholder="e.g., section:IT, vendor:IBM"
          required
        />
      </div>

      {/* Answer Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Answer</label>
        <textarea
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter the answer"
          required
        />
      </div>

      {/* User Email Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">User Email</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="user@example.com"
          required
        />
      </div>

      {/* Company Name Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Enter company name"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Question
        </button>
      </div>
    </form>
  );
};

export default CreateQuestionForm;
