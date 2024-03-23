import axios from 'axios';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/questions');
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};

export const searchQuestions = async (query) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/questions/search`, {
      params: { q: query }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching questions:', error);
    return [];
  }
};

export const createQuestion = async (questionData) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/questions`, questionData);
    return response.data;
  } catch (error) {
    console.error('Error creating question:', error);
    throw error; 
  }
};

export const updateQuestion = async (id, questionData) => {
  try {
    console.log(id,questionData)
    const response = await axios.put(`http://localhost:3000/api/questions/${id}`, questionData);
    return response.data;
  } catch (error) {
    console.error('Error updating question:', error);
    throw error;
  }
};

