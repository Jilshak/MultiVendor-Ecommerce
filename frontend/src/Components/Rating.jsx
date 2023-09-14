import React from 'react'

function Rating() {
    return (
        <div className="rating rating-sm">
            <input type="radio" name="rating-1" className="mask mask-star " />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" checked />
            <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
    )
}

export default Rating
