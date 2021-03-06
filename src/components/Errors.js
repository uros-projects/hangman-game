import React from 'react';

const Errors = ({ wrongLetters }) => {
    const errors = wrongLetters.length;
    const errorImgUrl = process.env.PUBLIC_URL + '/error.png';

    return (
        <div className='error-container'>
            {errors > 0 && <img className='error-img' alt='error-icon' src={errorImgUrl} />}
            {errors > 1 && <img className='error-img' alt='error-icon' src={errorImgUrl} />}
            {errors > 2 && <img className='error-img' alt='error-icon' src={errorImgUrl} />}
            {errors > 3 && <img className='error-img' alt='error-icon' src={errorImgUrl} />}
            {errors > 4 && <img className='error-img' alt='error-icon' src={errorImgUrl} />}
            {errors > 5 && <img className='error-img' alt='error-icon' src={errorImgUrl} />}
        </div>
    )
}

export default Errors
