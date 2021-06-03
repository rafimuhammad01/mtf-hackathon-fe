import React from 'react'

const TrainingAlert = () => {
	return (
		<div className="training-alert mb-3">
            <h4 className="mb-4">Training Alert System</h4>
            <h6 className="mb-4 fs-5">Senin,22 April 2021</h6>
            <div className="component-pelatihan">
                <div className="d-flex align-items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.6667 11C20.6667 16.3388 16.3388 20.6667 11 20.6667C5.66125 20.6667 1.33334 16.3388 1.33334 11C1.33334 5.66129 5.66125 1.33337 11 1.33337C16.3388 1.33337 20.6667 5.66129 20.6667 11Z" stroke="black" stroke-width="1.5"/>
                    <path d="M11 5.66663V11L13.6667 13.6666" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    
                  <p className="m-0">01:00:75 Lagi</p>
                </div>
            </div>
        </div>
	)
}

export default TrainingAlert