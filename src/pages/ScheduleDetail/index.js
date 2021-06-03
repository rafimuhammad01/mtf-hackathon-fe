import React, { Fragment } from 'react'
import { Navbar } from '../../components'

const ScheduleDetail = () => {
	return (
		<section className="mt-3">
          <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a className="text-dark" href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Pengenalan Komputer,Internet,Email & Microsoft Word</li>
                </ol>
              </nav>

            <div className="row mt-5">
                <div className="col-md-8">
                    <img src="https://source.unsplash.com/random" alt="" width="100%" height="400px" />
                    <h6 className="mt-3">COMPUTER ENGINEERING</h6>
                    <p className="fw-bold">Pengenalan Komputer,Internet,Email & Microsoft Word</p>
                    <p>Penyelenggara: Techforld</p>
                    <div>
                      <div className="accordion" id="accordion">
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Tentang Pelatihan
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body unread">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veniam quidem quisquam quod laboriosam! Temporibus placeat incidunt soluta, eum nostrum officiis repellendus! Saepe explicabo, ullam exercitationem obcaecati numquam accusamus nihil!</p>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="accordion" id="accordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Kompetensi Pelatihan
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body unread">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veniam quidem quisquam quod laboriosam! Temporibus placeat incidunt soluta, eum nostrum officiis repellendus! Saepe explicabo, ullam exercitationem obcaecati numquam accusamus nihil!</p>
                          </div>
                        </div>
                      </div>
                  </div>
                    </div>
                </div>   


                <div className="col">
                   <div className="card p-3 mb-4">
                      <div className="d-flex align-items-center gap-3 mb-3">
                          <i
                          ><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.3335 6.16667C1.3335 4.69391 2.5274 3.5 4.00016 3.5H18.0002C19.4729 3.5 20.6668 4.69391 20.6668 6.16667V17.5C20.6668 18.9728 19.4729 20.1667 18.0002 20.1667H4.00016C2.5274 20.1667 1.3335 18.9728 1.3335 17.5V6.16667Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.6665 0.833252V5.49992" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3335 0.833252V5.49992" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.3335 8.83325H16.6668" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </i>
                        <div>
                            <p className="m-0 fw-light">Hari,Tanggal</p>
                            <p className="m-0">Senin,22 April 2021</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center gap-3 mb-3">
                        <i
                        ><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.6668 16.4999C25.6668 21.8387 21.3389 26.1666 16.0002 26.1666C10.6614 26.1666 6.3335 21.8387 6.3335 16.4999C6.3335 11.1612 10.6614 6.83325 16.0002 6.83325C21.3389 6.83325 25.6668 11.1612 25.6668 16.4999Z" stroke="#141414" stroke-width="1.5"/>
                          <path d="M16 11.1667V16.5001L18.6667 19.1667" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/>
                          </svg>
                          
                      </i>
                      <div>
                          <p className="m-0 fw-light">Pukul</p>
                          <p className="m-0">10.00 - 14.00</p>
                      </div>
                      </div>

                      <div className="d-flex align-items-center gap-3 mb-3">
                        <i
                        ><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.3335 9.50016C6.3335 8.0274 7.5274 6.8335 9.00016 6.8335H23.0002C24.4729 6.8335 25.6668 8.0274 25.6668 9.50016V19.5002C25.6668 20.9729 24.4729 22.1668 23.0002 22.1668H9.00016C7.5274 22.1668 6.3335 20.9729 6.3335 19.5002V9.50016Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M20.3332 26.1667L15.9998 23.5L11.6665 26.1667" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          
                      </i>
                      <div>
                          <p className="m-0 fw-light">Metode</p>
                          <p className="m-0">Online</p>
                      </div>
                      </div>

                      <div className="d-flex align-items-center gap-3 mb-3">
                        <i
                        ><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.3335 12.1668L19.0002 10.5001C21.2093 8.29098 21.2093 4.70925 19.0002 2.50012C16.791 0.290978 13.2093 0.290977 11.0002 2.50011L9.3335 4.16678" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M4.66678 8.8335L3.00012 10.5002C0.790977 12.7093 0.790978 16.291 3.00012 18.5002C5.20925 20.7093 8.79098 20.7093 11.0001 18.5002L12.6668 16.8335" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M14 7.5L8 13.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                          
                      </i>
                      <div>
                          <p className="m-0 fw-light">Tautan</p>
                          <p className="m-0">zzom.us/fasdfa</p>
                      </div>
                      </div>
                    
                    </div>
                    <p>Ajukan Pembatalan Pelatihan</p>
                    <p className="fs-9 fw-light">Hubungi admin dengan klik tombol di bawah ini</p>
                    <button type="button" className="btn btn-custom py-3">Hubungi Admin</button>
                    
                </div>

          </div>
        </div>  
      </section> 
	)
}

export default ScheduleDetail