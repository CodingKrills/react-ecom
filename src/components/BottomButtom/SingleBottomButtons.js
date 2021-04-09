import React from 'react'
import './SingleBottomButtons.css'
const SingleBottomButtons = () => {
    return (
        <div className="d-grid gap-2 ">
            <div className="btn-group btn-bottom-fixed" role="group" >
                <button type="button" className="btn btn-lg btn-primary">Left</button>
                <button type="button" className="btn btn-lg btn-success">Right</button>
            </div>
        </div>
    )
}

export default SingleBottomButtons
