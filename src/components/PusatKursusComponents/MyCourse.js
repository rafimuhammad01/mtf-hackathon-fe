import React from 'react'
import { useHistory } from 'react-router-dom'

const MyCourse = () => {
  const history = useHistory()

	return (
		<section className="py-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Lanjutkan Kursus</h4>

                    <div className="d-flex align-items-center gap-3">
                      <p className="m-0"><a href="" className="btn-merah">Lihat Semua</a></p>
                    <div className="d-flex gap-2 btn-custom-outline align-items-center ">
                      <button className="btn"><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 1.25L0.75 4.5L4.25 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                        <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
                          </svg>
                        <p className="m-0">1/2</p>
                        <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
                          </svg>
                          
                      <button className="btn">
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75 1.25L4.25 4.5L0.75 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                      </button>
                  </div>
                  </div>
                </div>

                <div className="row gap-4">
                  <div className="col-md lanjutkan-kursus mb-5">
                    <div className="mb-3 border-0" style={{maxWidth: '790px'}}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src="https://source.unsplash.com/random" className="rounded-2" alt="..." width="100%" height="150px" />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body p-0 ps-3">
                            <h5 className="card-title mb-4">The Complete SQL Bootcamp 2021: from Zero to Hero SQL</h5>
                            <p className="card-text fw-bold">Bab 1.2:Lorem ipsum</p>
                            <p className="card-text"><small className="text-muted">Terakhir diakses:Sabtu,20 April 2021</small></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-end">
                      <button className="btn btn-custom" onClick={() => history.push('/detail-kursus/2')}>Lanjutkan</button>
                    </div>
                </div>

                <div className="col-md lanjutkan-kursus mb-5">
                  <div className="mb-3 border-0" style={{maxWidth: '790px'}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://source.unsplash.com/random" className="rounded-2" alt="..." width="100%" height="150px" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-0 ps-3">
                          <h5 className="card-title mb-4">The Complete SQL Bootcamp 2021: from Zero to Hero SQL</h5>
                          <p className="card-text fw-bold">Bab 1.2:Lorem ipsum</p>
                          <p className="card-text"><small className="text-muted">Terakhir diakses:Sabtu,20 April 2021</small></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-end">
                    <button className="btn btn-custom" onClick={() => history.push('/detail-kursus/2')}>Lanjutkan</button>
                  </div>
              </div>


                </div>

            </div>
        </section>
	)
}

export default MyCourse