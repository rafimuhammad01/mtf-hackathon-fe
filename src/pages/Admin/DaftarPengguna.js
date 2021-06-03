import React from 'react'

const DaftarPengguna = () => {
	return (
		<div id="daftar-pengguna" className="tabcontent-admin p-3" style={{display: 'none'}}>
              <div className="pengguna-first">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <h4 className="m-0">Daftar Pengguna</h4>
                  <div className="d-flex align-items-center gap-3">
                    <p className="m-0"><a href="" className="text-dark link-admin">Cari</a></p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75Z" stroke="#141414" stroke-width="1.5"></path>
                      <path d="M19.25 19.25L15.5 15.5" stroke="#141414" stroke-width="1.5" stroke-linecap="round"></path>
                      </svg>
                      
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div className="d-flex gap-3 align-items-center mb-3">
                    <p className="m-0">Divisi</p>
                    <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Semua Divisi
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
                    <p className="m-0">Menampilkan</p>
                    <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      25
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
              <h4 className="mb-3"><strong>Menampilkan semua Pengguna</strong></h4>
    
              <table className="table-pengguna w-100 table table-striped">
                <thead className="bg-custom-lightblue text-secondary">
                <tr>
                  <th scope="col" className="fw-light p-2">
                    Nama Lengkap
                  </th>
                  <th scope="col" className="fw-light">
                    Username
                  </th>
                  <th scope="col" className="fw-light">
                    Email
                  </th>
                  <th scope="col" className="fw-light">
                    Divisi
                  </th>
                  <th scope="col" className="fw-light">
                    Tanggal Bergabung
                  </th>
                </tr>
              </thead>
              <tbody>
               <tr scope="row">
                 <td>Fawwaadi Faishol Amir</td>
                 <td>fawwazfafa</td>
                 <td>fawwaadi@email.com</td>
                 <td>IT</td>
                 <td>02 Januari 2018</td>
               </tr>
  
               <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
              <tr scope="row">
                <td>Fawwaadi Faishol Amir</td>
                <td>fawwazfafa</td>
                <td>fawwaadi@email.com</td>
                <td>IT</td>
                <td>02 Januari 2018</td>
              </tr>
  
               
  
              </tbody>
              </table>  
              </div>
              <div className="pengguna-second d-none">
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.66683 1L1.3335 8L8.66683 15" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M20.6665 8H1.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  
                  <div className="d-flex align-items-center gap-3 my-3">
                    <img src="https://source.unsplash.com/random" alt="" width="64px" height="64px" className="rounded-circle" />
                    <h4 className="m-0">Fawwazadi Faishol Amir</h4>
                  </div>
                  
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.3332 5.66683C14.3332 8.06006 12.3931 10.0002 9.99984 10.0002C7.6066 10.0002 5.6665 8.06006 5.6665 5.66683C5.6665 3.2736 7.6066 1.3335 9.99984 1.3335C12.3931 1.3335 14.3332 3.2736 14.3332 5.66683Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M3.12997 20.6665H16.87C18.3925 20.6665 19.5653 19.3573 18.8543 18.011C17.8084 16.0306 15.4239 13.6665 9.99996 13.6665C4.57598 13.6665 2.19152 16.0306 1.14561 18.011C0.434586 19.3573 1.60741 20.6665 3.12997 20.6665Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    <p className="m-0">fawwazfafa</p>                      
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3335 4.33317C1.3335 2.86041 2.5274 1.6665 4.00016 1.6665H18.0002C19.4729 1.6665 20.6668 2.86041 20.6668 4.33317V15.6665C20.6668 17.1393 19.4729 18.3332 18.0002 18.3332H4.00016C2.5274 18.3332 1.3335 17.1393 1.3335 15.6665V4.33317Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M2.3335 2.6665L11.0002 10.3332L19.6668 2.6665" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      
                    <p className="m-0">fawwazadi@email.com</p>                      
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3335 8.00016C1.3335 6.5274 2.5274 5.3335 4.00016 5.3335H18.0002C19.4729 5.3335 20.6668 6.5274 20.6668 8.00016V18.0002C20.6668 19.4729 19.4729 20.6668 18.0002 20.6668H4.00016C2.5274 20.6668 1.3335 19.4729 1.3335 18.0002V8.00016Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.6665 5.00016V4.00016C6.6665 2.5274 7.86041 1.3335 9.33317 1.3335H12.6665C14.1393 1.3335 15.3332 2.5274 15.3332 4.00016V5.00016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M1.6665 12.6665H20.3332" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M6.6665 10.6665V13.9998" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M15.3335 10.6665V13.9998" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>

                    <ul className="d-flex gap-5 m-0 p-0">
                      <li style={{listStyle: 'none'}}>Junior Designer</li>
                      <li>IT</li>
                    </ul>                  
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.3335 6.66667C1.3335 5.19391 2.5274 4 4.00016 4H18.0002C19.4729 4 20.6668 5.19391 20.6668 6.66667V18C20.6668 19.4728 19.4729 20.6667 18.0002 20.6667H4.00016C2.5274 20.6667 1.3335 19.4728 1.3335 18V6.66667Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.6665 1.3335V6.00016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M16.3335 1.3335V6.00016" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.3335 9.3335H16.6668" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      
                    <p className="m-0">Bergabung sejak: <strong>02 Januari 2018</strong></p>                      
                  </div>

                  <div className="row gap-4 mb-4">
                    <div className="tablinks-pengguna d-flex flex-column justify-content-between col-sm-3 statistik-card active" id="defaultOpen-pengguna" onclick="openPengguna(event,'kursus-pelatihan')">
                        <h4 className="fw-bold text-end">4</h4>
                        <p className="m-0">Kursus dan Pelatihan</p>
                    </div>

                    <div className="tablinks-pengguna d-flex  flex-column justify-content-between col-sm-3 statistik-card" onclick="openPengguna(event,'total-jam')">
                      <h4 className="fw-bold text-end mb-3">35.3</h4>
                      <p className="fw-lighter text-secondary text-end">+3 jam dari minggu lalu</p>
                      <p className="m-0">Total Jam Belajar</p>
                  </div>

                  <div className="tablinks-pengguna d-flex  flex-column justify-content-between col-sm-3 statistik-card" onclick="openPengguna(event,'rata-rata')">
                      <h4 className="fw-bold text-end mb-3">85.7%</h4>
                      <p className="fw-lighter text-secondary text-end">Diatas rata-rata</p>
                      <p className="m-0">Nilai Rata-Rata Kamu</p>
                  </div>
                </div>

                <div className="content-pengguna">
                  <div className="kursus-pelatihan tabcontent-pengguna" id="kursus-pelatihan" style={{display: 'none'}}>
                    <h4>Kursus(3)</h4>
                    <table className="w-100 mb-3">
                      <thead className="bg-custom-lightblue text-secondary">
                      <tr>
                        <th scope="col" className="fw-light p-2">
                          Judul Kursus
                        </th>
                        <th scope="col" className="fw-light">
                          Kategori
                        </th>
                        <th scope="col" className="fw-light">
                          Tanggal Bergabung
                        </th>
                        <th scope="col" className="fw-light">
                          Progress(%)
                        </th>
                        <th scope="col" className="fw-light">
                          Nilai Akhir
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
                            <p>Sales</p>
                        </td>
                        <td scope="row">
                          <p>04 Desember 2019</p>
                        </td>
                        <td scope="row">
                          <p>79.5</p>
                        </td>
                        <td scope="row">
                          <p>-</p>
                        </td>
                      </tr>
      
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
                            <p>Sales</p>
                        </td>
                        <td scope="row">
                          <p>04 Desember 2019</p>
                        </td>
                        <td scope="row">
                          <p>79.5</p>
                        </td>
                        <td scope="row">
                          <p>-</p>
                        </td>
                      </tr>
                      </tbody>
                      </table>
                      <h4>Pelatihan(1)</h4>
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
                          Penyelenggara
                        </th>
                        <th scope="col" className="fw-light">
                          Waktu
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
                            <p>IT</p>
                        </td>
                        <td scope="row">
                          <p>Techforld</p>
                        </td>
                        <td scope="row">
                          <p>Senin, 21 April 2021
                            08.00 - 12.00</p>
                        </td>
                      </tr>
                      </tbody>
                      </table>
                  </div>
                  <div className="tabcontent-pengguna" id="total-jam" style={{display: 'none'}}>
                    <h1>asd</h1>
                  </div>
                  <div className="tabcontent-pengguna" id="rata-rata" style={{display: 'none'}}>
                    <table className="w-100 mb-3">
                      <thead className="bg-custom-lightblue text-secondary">
                      <tr>
                        <th scope="col" className="fw-light p-2">
                          Judul Kursus
                        </th>
                        <th scope="col" className="fw-light">
                          Kategori
                        </th>
                        <th scope="col" className="fw-light">
                          Tanggal Bergabung
                        </th>
                        <th scope="col" className="fw-light">
                          Progress(%)
                        </th>
                        <th scope="col" className="fw-light">
                          Nilai Akhir
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
                            <p>Sales</p>
                        </td>
                        <td scope="row">
                          <p>04 Desember 2019</p>
                        </td>
                        <td scope="row">
                          <p>79.5</p>
                        </td>
                        <td scope="row">
                          <p>-</p>
                        </td>
                      </tr>
      
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
                            <p>Sales</p>
                        </td>
                        <td scope="row">
                          <p>04 Desember 2019</p>
                        </td>
                        <td scope="row">
                          <p>79.5</p>
                        </td>
                        <td scope="row">
                          <p>-</p>
                        </td>
                      </tr>
                      </tbody>
                      </table>
                  </div>
                </div>

              </div>
            </div>
	)
}

export default DaftarPengguna