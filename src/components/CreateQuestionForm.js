import React, { useState } from 'react';

const CreateQuestionForm = ({ onSubmit }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [properties, setProperties] = useState('');
  const [questionDescription, setQuestionDescription] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email
  const validateEmail = (email) => {
    if (emailRegex.test(email)) {
      setEmailError('');
      return true;
    } else {
      setEmailError('Please enter a valid email address.');
      return false;
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate email before proceeding
    if (!validateEmail(email)) return;

    onSubmit({
        "_recordId": "recMqPCsDQ4KVKJEL",
        "Company Name": "Test Company Limited",
        Question: question,
        Answer: answer, 
        "Question Description": questionDescription,
        Properties: properties,
        "Created By": email,
        "Updated By": email,
        "_companyId": 63297,
    });

    // Reset form fields after submission
    setQuestion('');
    setQuestionDescription('');
    setProperties('');
    setAnswer('');
    setEmail('');
  };

  return (
    <form className="space-y-4 bg-white p-6 rounded-lg shadow" onSubmit={handleSubmit}>
      {/* Question Field */}
      <div>
        <label htmlFor="question" className="block text-sm font-medium text-gray-700">Question</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="What is your question?"
          required
        />
      </div>

      {/* Question Description Field */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Question Description</label>
        <textarea
          id="description"
          value={questionDescription}
          onChange={(e) => setQuestionDescription(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Provide more details about the question."
        ></textarea>
      </div>

      {/* Properties Field */}
      <div>
        <label htmlFor="properties" className="block text-sm font-medium text-gray-700">Properties</label>
        <input
          id="properties"
          type="text"
          value={properties}
          onChange={(e) => setProperties(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="section:Vendor Information,vendor:IBM"
        />
      </div>

      {/* Answer Field */}
      <div>
        <label htmlFor="answer" className="block text-sm font-medium text-gray-700">Answer</label>
        <textarea
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Provide an answer if available."
        ></textarea>
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail(email)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="you@example.com"
        />
        {emailError && <p className="text-red-500 text-xs mt-2">{emailError}</p>}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create Question
        </button>
      </div>
    </form>
  );
};

export default CreateQuestionForm;
