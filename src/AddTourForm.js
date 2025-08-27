import React,{useState} from 'react';


function AddTourForm({ addMoreTours, toggleForm }) { 
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
        info: '',
    });
    const handleChange = (e) => { 
         const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = (e) => { 
        e.preventDefault();
        const newTour = {
        id: new Date().getTime().toString(), ...formData
    }
    addMoreTours(newTour);
    setFormData({ name: '', price: '', image: "", info: '' });
    }
    
    return (
        <div className='mb-8'>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto border border-white/20 shadow-2xl'>
                <div className="flex justify-between items-center mb-6">
                    <h2 className='text-2xl font-bold text-white flex-1 text-center'>Add new Tour</h2>
                    <button onClick={ toggleForm} className='text-white hover:text-red-400 text-3xl font-bold transition-colors duration-200'>×</button>
                    </div>
            <form onSubmit={ handleSubmit} className="space-y-5">
                <input
                    type='text' name='name' placeholder='Tour name' value={ formData.name} onChange={handleChange} 
className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200" />
                
                <input type='text' placeholder='Price' name='price' value={formData.price} onChange={handleChange}
className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"/>
                
                <input type='text' name='image' placeholder='Image URL' value={formData.image} onChange={handleChange} 
className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"/>
                
                <textarea name='info' placeholder='Tour Info' value={formData.info} onChange={handleChange }
className="w-full bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg p-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-200"></textarea>
            <button type='submit' className="w-full bg-gradient-to-r from-green-500 to-green-600 font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transform hover:scale-105 transition-all duration-200 shadow-lg">Add Tours</button>
        </form>
    </div></div>
 );
}
export default AddTourForm;