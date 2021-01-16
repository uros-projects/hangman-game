import React from 'react';

const Errors = ({ wrongLetters }) => {
    const errors = wrongLetters.length;

    return (
        <div className='error-container'>
            {errors > 0 && <img className='error-img' alt='error-icon' src={process.env.PUBLIC_URL + 'error.png'} />}
            {errors > 1 && <img className='error-img' alt='error-icon' src={process.env.PUBLIC_URL + 'error.png'} />}
            {errors > 2 && <img className='error-img' alt='error-icon' src={process.env.PUBLIC_URL + 'error.png'} />}
            {errors > 3 && <img className='error-img' alt='error-icon' src={process.env.PUBLIC_URL + 'error.png'} />}
            {errors > 4 && <img className='error-img' alt='error-icon' src={process.env.PUBLIC_URL + 'error.png'} />}
            {errors > 5 && <img className='error-img' alt='error-icon' src={process.env.PUBLIC_URL + 'error.png'} />}
        </div>
    )
}

export default Errors
