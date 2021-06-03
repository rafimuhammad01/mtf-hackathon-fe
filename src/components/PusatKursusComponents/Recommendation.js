import React from 'react'
import { PerwiraMilesLogo } from '../../assets'

const Recommendation = () => {
	return (
		 <section className="recommendation py-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4>Rekomendasi untuk kamu</h4>
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
                          
                      <button className="btn">
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.75 1.25L4.25 4.5L0.75 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg> 
                      </button>
                  </div>
                  </div>
                </div>

                <div className="row ">
                    <div className="col-md-3 border-0 mb-5">
                        <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." height="200" />
                      <div className="card-body px-0">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text"><small className="text-muted">Tag topik</small></p>
                        <p className="card-text">25 peserta</p>
                        <div className="price-tag d-flex align-items-center ms-auto gap-2">
                          <img src={PerwiraMilesLogo} alt="" height="30px" />
                          <h5 className="m-0">PM 350</h5>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 border-0 mb-5">
                      <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." height="200" />
                    <div className="card-body px-0">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text"><small className="text-muted">Tag topik</small></p>
                      <p className="card-text">25 peserta</p>
                      <div className="price-tag d-flex align-items-center ms-auto gap-2">
                        <img src={PerwiraMilesLogo} alt="" height="30px" />
                        <h5 className="m-0">PM 350</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 border-0 mb-5">
                    <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." height="200" />
                  <div className="card-body px-0">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text"><small className="text-muted">Tag topik</small></p>
                    <p className="card-text">25 peserta</p>
                    <div className="price-tag d-flex align-items-center ms-auto gap-2">
                      <img src={PerwiraMilesLogo} alt="" height="30px" />
                      <h5 className="m-0">PM 350</h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 border-0 mb-5">
                  <img src="https://source.unsplash.com/random" className="card-img-top" alt="..." height="200" />
                <div className="card-body px-0">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text"><small className="text-muted">Tag topik</small></p>
                  <p className="card-text">25 peserta</p>
                  <div className="price-tag d-flex align-items-center ms-auto gap-2">
                    <img src={PerwiraMilesLogo} alt="" height="30px" />
                    <h5 className="m-0">PM 350</h5>
                  </div>
                </div>
              </div>

                    

                </div>
            </div>
        </section>
	)
}

export default Recommendation