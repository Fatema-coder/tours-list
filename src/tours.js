import Tour from './tour.js';
import React from 'react';

function Tours({ tours, removeTour }) { 
    return (
        <section className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {tours.map((tour) => { 
                return <Tour key={tour.id}  {...tour} removeTour={ removeTour} />;
            })}
        </section>
    )
} 
export default Tours;