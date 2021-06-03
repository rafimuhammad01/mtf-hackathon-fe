import React, { Fragment } from 'react'
import { Navbar } from '../../components'

const RiwayatTransaksi = () => {
	return (
		<Fragment>
			<Navbar />
			<section className="course-detail mt-3">
            <div className="container">
                  <div className="row">
                      <div className="col-md-8">
                          <div className="mb-5">
                          <h4 className="course-title mb-4">Riwayat Transaksi</h4>
                          <div className="d-flex gap-4 mb-5">
                            <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                              Semua Transaksi
                              <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
                                </svg>
                                
                              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                            </button>
                            <div className="d-flex gap-3 align-items-center">
                              <p className="m-0">Urutkan berdasarkan</p>
                              <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Tanggal Terakhir
                                <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
                                  </svg>
                                  
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  
                              </button>
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">pilihan</a></li>
                                <li><a className="dropdown-item" href="#">pilihan</a></li>
                                <li><a className="dropdown-item" href="#">pilihan</a></li>
                              </ul>
                          </div> 
                          </div> 

                          <div className="transaksi">
                            <div className="card-transaksi d-flex">
                                <div className="col-sm-1">
                                    <i
                                    ><svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15 13.3333L8 20.6666L1 13.3333" stroke="#4FAB2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M8 19.3333V1.33325" stroke="#4FAB2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                      
                                  </i>
                                </div>
                              <div className="col-sm-10">
                                <h4 className="mb-3">Reward Aktivitas Kantor</h4>
                                <p className="text-secondary">Reward Presensi</p>
                                <p className="text-secondary mb-3">Senin,22 April 2021 08:05</p>
                              </div>
                              <div className="col-sm-1">
                                <h4 className="success">+200</h4>
                              </div>
                            </div>

                            <hr />
                        </div>

                        </div>

                      </div>
                      <div className="col">
                        <div className="component-detail mb-4 p-3 ">
                            <h4 className="mb-4">Saldo Perwira Miles</h4>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <i
                                ><img src="img/PerwiraMiles.svg" alt="" />
                              </i>
                              <h4 className="m-0">3.600</h4>
                            </div>
                      </div>

                      <div className="mb-4 p-3 pt-5 border-2 border-top border-black">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex gap-3">
                            <i
                            ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.6667 10.9999C20.6667 16.3387 16.3388 20.6666 11 20.6666C5.66129 20.6666 1.33337 16.3387 1.33337 10.9999C1.33337 5.66117 5.66129 1.33325 11 1.33325C16.3388 1.33325 20.6667 5.66117 20.6667 10.9999Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M15.3333 11.0001C15.3333 13.3933 13.3932 15.3334 11 15.3334C8.60673 15.3334 6.66663 13.3933 6.66663 11.0001C6.66663 8.60685 8.60673 6.66675 11 6.66675C13.3932 6.66675 15.3333 8.60685 15.3333 11.0001Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M4.33337 17.6666L7.66671 14.3333" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M17.6667 17.6666L14.3334 14.3333" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M7.66671 7.66659L4.33337 4.33325" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M14.3334 7.66659L17.6667 4.33325" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>                              
                          </i>
                          <p className="m-0"><a href="" className="btn-merah">Pusat Bantuan</a></p>
                           </div>
                          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33337 1.66675L6.00004 6.00008L1.33337 10.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </div>
                  </div>

                  </div>
            </div>
            </div>
        </section>
		</Fragment>
	)
}

export default RiwayatTransaksi