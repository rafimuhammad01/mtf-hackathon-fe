import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'

const UpcomingSchedule = () => {
  const history = useHistory()

	return (
		<Fragment>
			<h5>Pelatihan Mendatang</h5>
         <div className="wrap mt-4">
             <p>Selasa,22 April 2021</p>
             <div className="component-pelatihan d-flex align-items-center gap-3 mb-3">
                   <i
                   ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" fill="white"/>
                    <path d="M25.6666 15.9999C25.6666 21.3387 21.3387 25.6666 16 25.6666C10.6612 25.6666 6.33331 21.3387 6.33331 15.9999C6.33331 10.6612 10.6612 6.33325 16 6.33325C21.3387 6.33325 25.6666 10.6612 25.6666 15.9999Z" stroke="#141414" stroke-width="1.5"/>
                    <path d="M16 10.6667V16.0001L18.6667 18.6667" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                    
                    
                 </i>
                 <p className="m-0">01:00:75 Lagi</p>
             </div>
             
             <div className="d-flex gap-3 mb-5" onClick={() => history.push('/schedule-detail')} style={{cursor: 'pointer'}}>
                  <img src="https://source.unsplash.com/random" alt="" width="200px" height="150px" />
                <div>
                  <p>COMPUTER ENGINEERING</p>
                  <p className="fw-bold">Pengenalan Komputer,Internet,Email & Microsoft Word</p>
                  <p className="fs-9 fw-light">Techforld</p>
                  <div className="row">
                      <div className="col">
                          <div className="d-flex align-items-center gap-3">
                              <i
                              ><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.33331 6.16667C1.33331 4.69391 2.52722 3.5 3.99998 3.5H18C19.4727 3.5 20.6666 4.69391 20.6666 6.16667V17.5C20.6666 18.9728 19.4727 20.1667 18 20.1667H3.99998C2.52722 20.1667 1.33331 18.9728 1.33331 17.5V6.16667Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.66669 0.833496V5.50016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.3333 0.833496V5.50016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.33331 8.8335H16.6666" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                            </i>
                            <div>
                                <p className="m-0 fw-light">Hari,Tanggal</p>
                                <p className="m-0">Senin,22 April 2021</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="d-flex align-items-center gap-3">
                              <i
                              ><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.833344 3.50016C0.833344 2.0274 2.02725 0.833496 3.50001 0.833496H17.5C18.9728 0.833496 20.1667 2.0274 20.1667 3.50016V13.5002C20.1667 14.9729 18.9728 16.1668 17.5 16.1668H3.50001C2.02725 16.1668 0.833344 14.9729 0.833344 13.5002V3.50016Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.8333 20.1667L10.5 17.5L6.16666 20.1667" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                            </i>
                            <div>
                                <p className="m-0 fw-light">Metode</p>
                                <p className="m-0">Online</p>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div className="row mt-3">
                      <div className="col">
                          <div className="d-flex align-items-center gap-3">
                              <i
                              ><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.6666 10.5002C20.6666 15.8389 16.3387 20.1668 11 20.1668C5.66123 20.1668 1.33331 15.8389 1.33331 10.5002C1.33331 5.16141 5.66123 0.833496 11 0.833496C16.3387 0.833496 20.6666 5.16141 20.6666 10.5002Z" stroke="#141414" stroke-width="1.5"/>
                                <path d="M11 5.1665V10.4998L13.6667 13.1665" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                
                            </i>
                            <div>
                                <p className="m-0 fw-light">Pukul</p>
                                <p className="m-0">08:00 - 14:00</p>
                            </div>
                          </div>
                      </div>
                      <div className="col">
                          <div className="d-flex align-items-center gap-3">
                              <i
                              ><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8333 12.1668L18.5 10.5001C20.7091 8.29098 20.7091 4.70925 18.5 2.50012C16.2909 0.290978 12.7091 0.290977 10.5 2.50011L8.83334 4.16678" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.16666 8.8335L2.49999 10.5002C0.290854 12.7093 0.290856 16.291 2.49999 18.5002C4.70913 20.7093 8.29085 20.7093 10.5 18.5002L12.1667 16.8335" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.5 7.5L7.5 13.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                
                            </i>
                            <div>
                                <p className="m-0 fw-light">Tautan</p>
                                <p className="m-0"><a href="" className="btn-merah">zzom.us/fasdfa</a></p>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
             </div>

             <div className="d-flex gap-3 mb-5" onClick={() => history.push('/schedule-detail')} style={{cursor: 'pointer'}}>
              <img src="https://source.unsplash.com/random" alt="" width="200px" height="150px" />
            <div>
              <p>UI/UX Design</p>
              <p className="fw-bold">Pengenalan Komputer,Internet,Email & Microsoft Word</p>
              <p className="fs-9 fw-light">Techforld</p>
              <div className="row">
                  <div className="col">
                      <div className="d-flex align-items-center gap-3">
                          <i
                          ><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.33331 6.16667C1.33331 4.69391 2.52722 3.5 3.99998 3.5H18C19.4727 3.5 20.6666 4.69391 20.6666 6.16667V17.5C20.6666 18.9728 19.4727 20.1667 18 20.1667H3.99998C2.52722 20.1667 1.33331 18.9728 1.33331 17.5V6.16667Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.66669 0.833496V5.50016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.3333 0.833496V5.50016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.33331 8.8335H16.6666" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </i>
                        <div>
                            <p className="m-0 fw-light">Hari,Tanggal</p>
                            <p className="m-0">Senin,22 April 2021</p>
                        </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="d-flex align-items-center gap-3">
                          <i
                          ><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.833344 3.50016C0.833344 2.0274 2.02725 0.833496 3.50001 0.833496H17.5C18.9728 0.833496 20.1667 2.0274 20.1667 3.50016V13.5002C20.1667 14.9729 18.9728 16.1668 17.5 16.1668H3.50001C2.02725 16.1668 0.833344 14.9729 0.833344 13.5002V3.50016Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.8333 20.1667L10.5 17.5L6.16666 20.1667" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </i>
                        <div>
                            <p className="m-0 fw-light">Metode</p>
                            <p className="m-0">Online</p>
                        </div>
                      </div>
                  </div>
              </div>

              <div className="row mt-3">
                  <div className="col">
                      <div className="d-flex align-items-center gap-3">
                          <i
                          ><svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6666 10.5002C20.6666 15.8389 16.3387 20.1668 11 20.1668C5.66123 20.1668 1.33331 15.8389 1.33331 10.5002C1.33331 5.16141 5.66123 0.833496 11 0.833496C16.3387 0.833496 20.6666 5.16141 20.6666 10.5002Z" stroke="#141414" stroke-width="1.5"/>
                            <path d="M11 5.1665V10.4998L13.6667 13.1665" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            
                        </i>
                        <div>
                            <p className="m-0 fw-light">Pukul</p>
                            <p className="m-0">08:00 - 14:00</p>
                        </div>
                      </div>
                  </div>
                  <div className="col">
                      <div className="d-flex align-items-center gap-3">
                          <i
                          ><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.8333 12.1668L18.5 10.5001C20.7091 8.29098 20.7091 4.70925 18.5 2.50012C16.2909 0.290978 12.7091 0.290977 10.5 2.50011L8.83334 4.16678" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.16666 8.8335L2.49999 10.5002C0.290854 12.7093 0.290856 16.291 2.49999 18.5002C4.70913 20.7093 8.29085 20.7093 10.5 18.5002L12.1667 16.8335" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.5 7.5L7.5 13.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            
                        </i>
                        <div>
                            <p className="m-0 fw-light">Tautan</p>
                            <p className="m-0"><a href="" className="btn-merah">zzom.us/fasdfa</a></p>
                        </div>
                      </div>
                  </div>
              </div>
            </div>
         </div>
         </div>
		</Fragment>
	)
}

export default UpcomingSchedule