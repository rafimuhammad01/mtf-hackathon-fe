import React from 'react'

const UpcomingCourse = () => {
	return (
		<div className="card border-0" style={{width: '100%'}}>
            <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." height="150px" />
            <div className="card-body">
                <p className="card-text fw-light">COMPUTER ENGINEERING</p>
              <h5 className="card-title">Pengenalan Komputer,Internet,Email & Microsoft Word</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p className="fw-light mb-2">Techforld</p>
              <div className="d-flex align-items-center gap-3">
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33334 6.16667C1.33334 4.69391 2.52724 3.5 4 3.5H18C19.4728 3.5 20.6667 4.69391 20.6667 6.16667V17.5C20.6667 18.9728 19.4728 20.1667 18 20.1667H4C2.52724 20.1667 1.33334 18.9728 1.33334 17.5V6.16667Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.66666 0.833252V5.49992" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.3333 0.833252V5.49992" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.33334 8.83325H16.6667" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
              <div>
                  <p className="m-0 fw-light">Hari,Tanggal</p>
                  <p className="m-0">Senin,22 April 2021</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.6667 11C20.6667 16.3388 16.3388 20.6667 11 20.6667C5.66125 20.6667 1.33334 16.3388 1.33334 11C1.33334 5.66129 5.66125 1.33337 11 1.33337C16.3388 1.33337 20.6667 5.66129 20.6667 11Z" stroke="black" stroke-width="1.5"/>
                <path d="M11 5.66663V11L13.6667 13.6666" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              <div>
                  <p className="m-0 fw-light">Pukul</p>
                  <p className="m-0">10.00 - 14.00</p>
              </div>
            </div>
            </div>
        </div>
	)
}

export default UpcomingCourse