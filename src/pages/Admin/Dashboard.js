import React from 'react'

const Dashboard = () => {
	return (
		<div id="dashboard" className="tabcontent-admin" style={{display: "block"}}>
            <h4 className="mb-5">Dashboard</h4>
            <div className="row">
              <div className="col-md-9">
                <div className="d-flex justify-content-evenly gap-4 mb-4">
                  <div className="d-flex flex-column justify-content-between col-sm-3 flex-fill  statistik-card">
                      <h4 className="fw-bold text-end">242</h4>
                      <p className="fw-lighter text-secondary text-end">+4 dari minggu lalu</p>
                      <p className="m-0">Total Pengguna</p>
                  </div>

                  <div className="d-flex flex-column justify-content-between col-sm-3 flex-fill statistik-card">
                    <h4 className="fw-bold text-end mb-3">65</h4>
                    <p className="m-0">Total Kursus</p>
                </div>

                <div className="d-flex flex-column justify-content-between col-sm-3 flex-fill statistik-card">
                    <h4 className="fw-bold text-end mb-3">65</h4>
                    <p className="m-0">Total Kursus</p>
                </div>
              </div>

              <h4 className="mb-3">Pelatihan Hari Ini (6)</h4>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="m-0">Senin,22 April 2021</p>
                <div className="d-flex gap-3 align-items-center">
                    <p className="m-0">Urutkan</p>
                    <button className="btn btn-outline-dark d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Waktu
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

              <table className="w-100 table table-striped">
                <thead className="bg-custom-lightblue">
                <tr>
                  <th scope="col" className="p-2">
                    Nama Pelatihan
                  </th>
                  <th scope="col">
                    Penyelenggara
                  </th>
                  <th scope="col">
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
                        <p className="m-0 mb-2 text-secondary">TopikPelatihan1</p>
                        <p className="m-0 fw-bold">Pelatihan1</p>
                    </div>
                    </div>
                  </td>
                  <td scope="row">
                      <p>Techforld</p>
                  </td>
                  <td scope="row">
                    <p>08.00 - 14.00</p>
                  </td>
                </tr>

                <tr>
                  <td scope="row">
                    <div className="d-flex gap-2 mt-3">
                      <img src="https://source.unsplash.com/random" alt="" className="" width="150px" height="100px" />
                      <div className="">
                        <p className="m-0 mb-2 text-secondary">TopikPelatihan1</p>
                        <p className="m-0 fw-bold">Pelatihan1</p>
                    </div>
                    </div>
                  </td>
                  <td scope="row">
                      <p>Techforld</p>
                  </td>
                  <td scope="row">
                    <p>08.00 - 14.00</p>
                  </td>
                </tr>

                <tr>
                  <td scope="row">
                    <div className="d-flex gap-2 mt-3">
                      <img src="https://source.unsplash.com/random" alt="" className="" width="150px" height="100px" />
                      <div className="">
                        <p className="m-0 mb-2 text-secondary">TopikPelatihan1</p>
                        <p className="m-0 fw-bold">Pelatihan1</p>
                    </div>
                    </div>
                  </td>
                  <td scope="row">
                      <p>Techforld</p>
                  </td>
                  <td scope="row">
                    <p>08.00 - 14.00</p>
                  </td>
                </tr>

                <tr>
                  <td scope="row">
                    <div className="d-flex gap-2 mt-3">
                      <img src="https://source.unsplash.com/random" alt="" className="" width="150px" height="100px" />
                      <div className="">
                        <p className="m-0 mb-2 text-secondary">TopikPelatihan1</p>
                        <p className="m-0 fw-bold">Pelatihan1</p>
                    </div>
                    </div>
                  </td>
                  <td scope="row">
                      <p>Techforld</p>
                  </td>
                  <td scope="row">
                    <p>08.00 - 14.00</p>
                  </td>
                </tr>

                <tr>
                  <td scope="row">
                    <div className="d-flex gap-2 mt-3">
                      <img src="https://source.unsplash.com/random" alt="" className="" width="150px" height="100px" />
                      <div className="">
                        <p className="m-0 mb-2 text-secondary">TopikPelatihan1</p>
                        <p className="m-0 fw-bold">Pelatihan1</p>
                    </div>
                    </div>
                  </td>
                  <td scope="row">
                      <p>Techforld</p>
                  </td>
                  <td scope="row">
                    <p>08.00 - 14.00</p>
                  </td>
                </tr>

                <tr>
                  <td scope="row">
                    <div className="d-flex gap-2 mt-3">
                      <img src="https://source.unsplash.com/random" alt="" className="" width="150px" height="100px" />
                      <div className="">
                        <p className="m-0 mb-2 text-secondary">TopikPelatihan1</p>
                        <p className="m-0 fw-bold">Pelatihan1</p>
                    </div>
                    </div>
                  </td>
                  <td scope="row">
                      <p>Techforld</p>
                  </td>
                  <td scope="row">
                    <p>08.00 - 14.00</p>
                  </td>
                </tr>

              </tbody>
              </table>
              </div>

              <div className="col-md-3">
                <h4>Live feed</h4>
                <div>
                  <div className="bg-custom-lightblue mb-2 p-3 rounded-2">
                      <p><strong>Username1</strong> membeli kursus <strong>Judulkursus1</strong> seharga <strong>PM300</strong></p>
                      <p className="m-0 text-secondary fw-light text-end">10 menit yg lalu</p>
                  </div>

                  <div className="bg-custom-lightblue mb-2 p-3 rounded-2">
                    <p><strong>Username1</strong> membeli kursus <strong>Judulkursus1</strong> seharga <strong>PM300</strong></p>
                    <p className="m-0 text-secondary fw-light text-end">10 menit yg lalu</p>
                  </div>

                  <div className="bg-custom-lightblue mb-2 p-3 rounded-2">
                    <p><strong>Username1</strong> membeli kursus <strong>Judulkursus1</strong> seharga <strong>PM300</strong></p>
                    <p className="m-0 text-secondary fw-light text-end">10 menit yg lalu</p>
                  </div>

                  <div className="bg-custom-lightblue mb-2 p-3 rounded-2">
                    <p><strong>Username1</strong> membeli kursus <strong>Judulkursus1</strong> seharga <strong>PM300</strong></p>
                    <p className="m-0 text-secondary fw-light text-end">10 menit yg lalu</p>
                  </div>
                  
                </div>
              </div>
            </div>
            </div>
	)
}

export default Dashboard