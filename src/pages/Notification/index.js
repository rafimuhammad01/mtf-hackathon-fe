import React, { Fragment } from 'react'
import { Navbar } from '../../components' 

const Notification = () => {
	return (
		<Fragment>
			<Navbar />
			<section className="course-detail mt-3">
            <div className="container">
                  <div className="row">
                      <div className="col-md-8">
                      	<div className="mb-5">
                          <h4 className="course-title mb-4">Notifikasi</h4>
                           <div className="notifikasi">
                           	<div className="d-flex card-notifikasi gap-5 mb-3 p-3 unread rounded-3">
                                <div className="">
                                    <i
                                    ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4.33335 20.6667H15.6667C17.1394 20.6667 18.3334 19.4728 18.3334 18V7.00004L12.6667 1.33337H4.33335C2.86059 1.33337 1.66669 2.52728 1.66669 4.00004V18C1.66669 19.4728 2.86059 20.6667 4.33335 20.6667Z" stroke="#09215D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      <path d="M18 7.33329H12.3333V1.66663" stroke="#09215D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                      </svg>
                                      
                                  </i>
                                </div>
                                <div className="col-sm-11">
                                    <p>Pelatihan <strong>Pengenalan Komputer,internet,Email & Microsoft Word</strong>
                                        akan berlangsung 30 menit lagi
                                    </p>

                                    <ul className="d-flex gap-5 p-0 text-secondary">
                                        <li style={{listStyleType: 'none'}}>Reminder</li>
                                        <li className="ps-3">Senin,22 April 2021 07:30:23</li>
                                    </ul>
                                </div>
                            </div>
                           </div>
                        </div>
                     </div>
                     <div className="col">
                        <div>
                            <button className="btn btn-custom">Tandai semua dibaca</button>
                        </div>   
                    </div>
                    </div>
                </div>
            </section>
		</Fragment>
	)
}

export default Notification