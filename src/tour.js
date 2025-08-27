import { useState } from 'react';
function Tour({ id, name, info, image, price, removeTour }) {
    const [readMore, setReadMore]=useState(false)
    return (
        <article className='bg-white shadow-md rounded-2xl overflow-hidden mb-6 transition-all duration-300 hover:shadow-xl'>
            <img src={image} alt={name} className='h-64 w-full object-cover'/>
            <footer className='p-5 '>
                <div className='flex justify-between items-center mb-3'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <span className='text-green-600 font-bold'>${price}</span>
                </div>
        
                <p className='text-gray-600 text-sm mb-4'>{readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={()=>setReadMore(!readMore)} className='ml-2 text-blue-500 hover:text-blue-700 font-semibold transition-colors'>{ readMore? 'showless':'readmore'}</button>
                </p>
                
                <button onClick={() => removeTour(id)}className='mt-auto bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition'>Not Interested</button>
                 </footer>
        </article>
    )
}
export default Tour;
