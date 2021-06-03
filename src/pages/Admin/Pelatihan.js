import React from 'react'

const Pelatihan = () => {
	return (
		<div id="pelatihan" className="tabcontent-admin p-3" style={{display: 'none'}}>
              <div className="first">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="m-0">Pelatihan</h4>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="d-flex align-items-center gap-3">
                      <p className="m-0"><a href="" className="text-dark link-admin">Cari</a></p>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75Z" stroke="#141414" stroke-width="1.5"></path>
                        <path d="M19.25 19.25L15.5 15.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round"></path>
                        </svg>
                        
                    </div>
                      <button className="btn tambah-pelatihan btn-custom" type="button">
                        Tambah Pelatihan Baru
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0.75V13.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M13.25 7H0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                          
                      </button>
                  </div>
                </div>
              <div className="row">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-3 align-items-center mb-3">
                        <p className="m-0">Kategori</p>
                        <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                          Semua Kategori
                          <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"></line>
                            </svg>
                            
                          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                          <li><a className="dropdown-item" href="#">pilihan</a></li>
                          <li><a className="dropdown-item" href="#">pilihan</a></li>
                          <li><a className="dropdown-item" href="#">pilihan</a></li>
                        </ul>
                    </div> 
                    <div className="d-flex gap-3 align-items-center mb-3">
                      <p className="m-0">Tanggal</p>
                      <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Semua Tanggal
                        <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"></line>
                          </svg>
                          
                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">pilihan</a></li>
                        <li><a className="dropdown-item" href="#">pilihan</a></li>
                        <li><a className="dropdown-item" href="#">pilihan</a></li>
                      </ul>
                  </div>
                  </div>
                <h4 className="mb-3">Menampilkan semua <strong>Kursus(65)</strong></h4>
  
                <table className="w-100">
                  <thead className="bg-custom-lightblue text-secondary">
                  <tr>
                    <th scope="col" className="fw-light p-2">
                      Judul Kursus
                    </th>
                    <th scope="col" className="fw-light">
                      Kategori
                    </th>
                    <th scope="col" className="fw-light">
                      Harga PM
                    </th>
                    <th scope="col" className="fw-light">
                      Tanggal Input
                    </th>
                    <th scope="col" className="fw-light">
                      Pengguna
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      <div className="d-flex gap-2 mt-3">
                        <img src="https://source.unsplash.com/random" alt="" className="" width="150px" height="100px" />
                        <div className="">
                          <p className="m-0 mb-2 text-secondary">JudulKursus1</p>
                      </div>
                      </div>
                    </td>
                    <td scope="row">
                        <p>Marketing</p>
                    </td>
                    <td scope="row">
                      <p>PM 300</p>
                    </td>
                    <td scope="row">
                      <p>04-12-19</p>
                    </td>
                    <td scope="row">
                      <p>54</p>
                    </td>
                  </tr>
  
                </tbody>
                </table>
                  <ul className="pagination pagination-sm">
                    <li className="page-item">
                      <a className="page-link" href="#" tabindex="-1">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                  </ul>
              </div>

              </div>

              <div className="second d-none">
                
                <div id="" className="p-3">
              <div className="d-flex align-items-center gap-3 mb-5">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66683 1L1.3335 8L8.66683 15" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M20.6665 8H1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                <h4 className="m-0">Tambah Pelatihan Baru</h4>
              </div>
              <div className="d-flex justify-content-between bg-custom-lightblue mb-3 p-2 rounded-2">
                <p className="m-0">Bagian 1:informasi Kursus</p>
                <p className="m-0">1/2</p>
              </div>
              <form className="ms-auto text-end" action="" method="" style={{width:'90%'}}>
                <div className="row justify-content-start align-items-center mb-4 gap-3">
                    <label for="judul" className="col-md-2 fw-bold">Nama Pelatihan</label>
                    <div className="col-md-9">        
                      <input type="text" className="form-control" name="judul" id="judul" />
                    </div>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="kategori" className="col-md-2 fw-bold">Topik Pelatihan</label>
                    <div className="col-md-9">        
                      <select className="form-select" aria-label="Default select example">
                        <option selected="">Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                  <label for="gambar" className="col-md-2 fw-bold">Gambar Pelatihan</label>
                  <div className="col-md-9">        
                    <div className="d-flex gap-3 align-items-start">
                      <div style={{width:'300px', height: '180px', backgroundColor: '#eee'}}></div>
                       <button className="btn btn-custom">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0.75V13.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          <path d="M13.25 7H0.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Tambah Foto                          
                       </button> 
                    </div>
                  </div>
              </div>
              <div className="row justify-content-start mb-4 gap-3">
                <label for="harga" className="col-md-2 fw-bold">Materi1</label>
                <div className="col-md-8">
                  <div className="col-md-4 d-flex gap-3 align-items-start">
                    <p>Waktu mulai</p> 
                    <button className="btn w-100 btn-outline-dark d-flex justify-content-between align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Video
                      <div className="d-flex gap-3 align-items-center">
                      <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"></line>
                        </svg>
                        
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>  
                        
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">pilihan</a></li>
                      <li><a className="dropdown-item" href="#">pilihan</a></li>
                      <li><a className="dropdown-item" href="#">pilihan</a></li>
                    </ul>
                  </div>

                  <div className="col-md-4 d-flex gap-3 align-items-start">
                    <p>Waktu Selesai</p> 
                    <button className="btn w-100 btn-outline-dark d-flex justify-content-between align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Video
                      <div className="d-flex gap-3 align-items-center">
                      <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"></line>
                        </svg>
                        
                      <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>  
                        
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">pilihan</a></li>
                      <li><a className="dropdown-item" href="#">pilihan</a></li>
                      <li><a className="dropdown-item" href="#">pilihan</a></li>
                    </ul>
                  </div>  

                </div>
                                
            </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="desc" className="col-md-2 fw-bold">Deskripsi pelatihan</label>
                    <div className="col-md-9">
                      <textarea name="desc" className="form-control" id="desc" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="row justify-content-start align-items-start mb-4 gap-3">
                  <label for="silabus" className="col-md-2 fw-bold">Silabus</label>
                  <div className="col-md-9 silabus">        
                    <input type="text" className="form-control mb-2" name="silabus" id="silabus" />
                    <div className="text-start btn-tambah-wrap">
                    <button className="btn tambah-silabus">Klik untuk menambah poin silabus lainnya <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.75V13.25" stroke="#FF9A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M13.25 7H0.75" stroke="#FF9A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      </button>
                    </div>  
                  </div>
              </div>
              <div className="row justify-content-start align-items-center mb-4 gap-3">
                <label for="harga" className="col-md-2 fw-bold">Harga PM</label>
                <div className="col-md-3 d-flex gap-3 align-items-center">
                  <p className="m-0">PM</p>        
                  <input type="text" className="form-control" name="harga" id="harga" />
                </div>
            </div>
                <button className="btn btn-custom btn-lanjut">Lanjut ke bagian selanjutnya</button>
        </form>
                </div>
              </div>

            </div>
	)
}

export default Pelatihan