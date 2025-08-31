import { useState, useEffect } from 'react'
import React from 'react';
import Loading from './loading.js'
import Tours from './tours.js';
import AddMoreTours from './AddTourForm.js'


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const url = 'https://raw.githubusercontent.com/Fatema-coder/react-tours-data/refs/heads/main/tours-data'

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      console.error('Error Fetching Tours:', err);
      setError(true);
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  }
  
  const addMoreTours = (newTour) => {
    setTours([...tours, newTour]);
    setShowForm(false);
  }
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  }
  const refreshTours = () => {
    setLoading(true);
    fetchTours();
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return (
      <div className='text-red-500 text-center mt-10'>Failed to fetch tours. Please try again later. </div>
    )
  }
  return (
    <div className='min-h-screen bg-gray-700 flex flex-col items-center py-10'>
      <h1 className='text-4xl text-white font-bold mb-8'>My Tour Places</h1>
      <div className='max-w-6xl w-full px-4'>
        {showForm && <AddMoreTours addMoreTours={addMoreTours} toggleForm={toggleForm} />}
        <Tours tours={tours} removeTour={removeTour} />
        
        <div className='flex justify-center gap-4 mt-6 flex-wrap'>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              toggleForm();
            }}
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold shadow-lg flex-shrink-0"
          >
            {showForm ? "Close Form" : "↑ Add New Tour"}
          </button>
      
          {tours.length === 0 && (
            <button
              onClick={refreshTours}
              className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-semibold shadow-lg flex-shrink-0"
            >
              Refresh Tours
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default App;
