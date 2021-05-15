import React from 'react';
import './LoginTags.css';

function LoginTags({heading, tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9, tag10, tag11, tag12, tag13}) {
    return (
        <div className='tags'>
            <h6 className='tags__heading'>{heading}</h6>
            <p className='tags__tag'>{tag1}</p>
            <p className='tags__tag'>{tag2}</p>
            <p className='tags__tag'>{tag3}</p>
            <p className='tags__tag'>{tag4}</p>
            <p className='tags__tag'>{tag5}</p>
            <p className='tags__tag'>{tag6}</p>
            <p className='tags__tag'>{tag7}</p>
            <p className='tags__tag'>{tag8}</p>
            <p className='tags__tag'>{tag9}</p>
            <p className='tags__tag'>{tag10}</p>
            <p className='tags__tag'>{tag11}</p>
            <p className='tags__tag'>{tag12}</p>
            <p className='tags__tag'>{tag13}</p>
        </div>
    )
}

export default LoginTags
