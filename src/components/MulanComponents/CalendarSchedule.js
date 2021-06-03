import React, { Fragment } from 'react'

const CalendarSchedule = () => {
	return (
		<Fragment>
			 <p>Kalender</p>
                  <div id="datepicker">
                      <div className="d-flex justify-content-between mb-4">
                        <div className="d-flex gap-2 align-items-center">
                          <h6 className="m-0" id="month-title"></h6>
                          <span id="year">2021</span>
                        </div>
  
                          <div>
                            <div className="d-flex gap-2 btn-custom-outline align-items-center ">
                              <button className="btn" name="prev-y" value=""  id="prev-y"><svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 1.25L0.75 4.5L4.25 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </button>
                                <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
                                  </svg>
                                <p className="m-0">Hari Ini</p>
                                <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
                                  </svg>
                                  
                              <button className="btn" name="next-y" value=""  id="next-y">
                                <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.75 1.25L4.25 4.5L0.75 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                                  
                              </button>
                            </div>
                          </div>
                      </div>
                      <table id="dt-able">
                        <td className="day_val"></td>
                        
                    
                      </table>
                    
                      <input type="button" name="prev" value="Prev Mo"  id="prev-month" />
                      <input type="button" name="next" value="Next Mo"  id="next-month" />
                  </div>

                  <div className="my-4 p-3 py-5 border-2 border-top border-bottom border-black">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-3">
                        <i
                        ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.3334 25.6666H21.6667C23.1395 25.6666 24.3334 24.4727 24.3334 22.9999V11.9999L18.6667 6.33325H10.3334C8.86066 6.33325 7.66675 7.52716 7.66675 8.99992V22.9999C7.66675 24.4727 8.86066 25.6666 10.3334 25.6666Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M23.9999 12.3334H18.3333V6.66675" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13 20.3333H19" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M13 16.3333H19" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                                                      
                      </i>
                      <p className="m-0"><a href="" className="btn-merah">Riwayat Pelatihan</a></p>
                       </div>
                      <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.33337 1.66675L6.00004 6.00008L1.33337 10.3334" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        
                    </div>
                  </div>

                    <p className="mt-5">Ingin Mengikuti Pelatihan?</p>
                    <p className="fs-9 fw-light">Hubungi admin dengan klik tombol di bawah ini</p>
                    <button type="button" className="btn btn-custom py-3">Hubungi Admin</button>

		</Fragment>
	)
}

export default CalendarSchedule