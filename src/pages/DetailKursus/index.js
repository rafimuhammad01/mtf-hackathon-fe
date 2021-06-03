import React, { Fragment } from 'react'
import { Navbar } from '../../components'

const DetailKursus = () => {
	return (
		<Fragment>
			<Navbar />
			<section className="course-detail mt-3">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a className="text-dark" href="#">IT</a></li>
                      <li className="breadcrumb-item active" aria-current="page"><a className="text-dark" href="#">Database Design & Development</a></li>
                      <li className="breadcrumb-item active" aria-current="page">MySQL</li>
                    </ol>
                  </nav>

                  <div className="row">
                      <div className="col-md-8">
                          <h3 className="course-title mb-4">The Complete SQL Bootcamp 2021: from Zero to Hero SQL</h3>
                          <p className="mb-3"><strong>234</strong> pengguna lain belajar topik ini</p>
                          

                          <div className="accordion mb-5" id="accordion">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Tentang Kursus Ini
                                </button>
                              </h2>
                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body unread">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veniam quidem quisquam quod laboriosam! Temporibus placeat incidunt soluta, eum nostrum officiis repellendus! Saepe explicabo, ullam exercitationem obcaecati numquam accusamus nihil!</p>
                                </div>
                              </div>
                            </div>
                        </div>


                          <div className="mb-4 p-3" style={{background: "#EDF2FC"}}>
                            <h5 className="m-0">Kamu akan belajar</h5>
                            <ul className="p-3">
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                                <li>Use SQL to query database</li>
                            </ul>
                          </div>

                          <div className="component-detail mb-4">
                            <div className="d-flex justify-content-between align-items-center p-3">
                                    <h5 className="m-0">Konten Kursus</h5>
                                    <ul className="d-flex gap-4 align-items-center m-0">
                                      <li style={{listStyle: "none"}}>4 bab</li>
                                      <li>12 subbab</li>
                                      <li>4 Kuis</li>
                                    </ul>
                            </div>
                            <div className="detail-content p-3">
                              
                              <div className="accordion" id="accordion">
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                      Bab 1:Nama Bab 1
                                    </button>
                                  </h2>
                                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{color: '#000'}}>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>


                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Kuis 1</p>
                                      </div>


                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                      Bab 2:Nama Bab 2
                                    </button>
                                  </h2>
                                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{color: '#000'}}>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>


                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Kuis 1</p>
                                      </div>


                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Bab 3:Nama Bab 3
                                    </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{color: '#000'}}>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>


                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Kuis 1</p>
                                      </div>


                                    </div>
                                  </div>
                                </div>

                                <div className="accordion-item">
                                  <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                      Bab 4:Nama Bab 4
                                    </button>
                                  </h2>
                                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body" style={{color: '#000'}}>
                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>

                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Sub bab 1.1</p>
                                      </div>


                                      <div className="d-flex align-items-center gap-3 mb-3">
                                        <i
                                        ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M4.33335 20.6668H15.6667C17.1394 20.6668 18.3334 19.4729 18.3334 18.0002V7.00016L12.6667 1.3335H4.33335C2.86059 1.3335 1.66669 2.5274 1.66669 4.00016V18.0002C1.66669 19.4729 2.86059 20.6668 4.33335 20.6668Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          <path d="M18 7.33317H12.3333V1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                          
                                      </i>
                                          <p className="m-0 fw-light">Kuis 1</p>
                                      </div>


                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>


                      </div>
                      <div className="col">
                        <div className="card p-3">
                            <h5 className="mx-0 mb-3">Biaya pendaftaran</h5>
                            <div className="d-flex align-items-center gap-3 mb-3">
                                <img src="img/PerwiraMiles.svg" alt="" />
                              <h4 className="m-0">PM 360</h4>
                            </div>
                        </div>

                        <div className="duration px-3">
                          <h5 className="mx-0 my-3">Durasi kursus</h5>                                      
                          <div className="d-flex gap-3 mb-5">
                            <i
                            ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M25.6667 16.0002C25.6667 21.3389 21.3388 25.6668 16 25.6668C10.6613 25.6668 6.33337 21.3389 6.33337 16.0002C6.33337 10.6614 10.6613 6.3335 16 6.3335C21.3388 6.3335 25.6667 10.6614 25.6667 16.0002Z" stroke="#141414" stroke-width="1.5"/>
                              <path d="M16 10.6665V15.9998L18.6667 18.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/>
                              </svg>
                              
                          </i>
                              <div>
                                <h5 className="mb-2">2 Bulan</h5>
                                <p className="m-0 fw-light">Perkiraan <strong>48 jam untuk menyelesaikan kursus</strong></p>
                              </div>
                          </div>
                          <hr className="mb-5" />
                          
                          <div className="d-flex gap-3 mb-5">
                            <i
                            ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M25.6667 16.0002C25.6667 21.3389 21.3388 25.6668 16 25.6668C10.6613 25.6668 6.33337 21.3389 6.33337 16.0002C6.33337 10.6614 10.6613 6.3335 16 6.3335C21.3388 6.3335 25.6667 10.6614 25.6667 16.0002Z" stroke="#141414" stroke-width="1.5"/>
                              <path d="M16 10.6665V15.9998L18.6667 18.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round"/>
                              </svg>
                              
                          </i>
                                <p className="m-0 fw-light"><a className="btn-merah" href="">Simpan di daftar keinginan</a></p>
                          </div>
                          
                          <hr className="mb-5" /> 
                          <button className="btn btn-custom w-100">Daftar Kursus ini</button>

                        </div>
                      </div>
                  </div>
            </div>
        </section>
		</Fragment>
	)
}

export default DetailKursus