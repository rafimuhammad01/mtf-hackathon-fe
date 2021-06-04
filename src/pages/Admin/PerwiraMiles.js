import React from 'react'

const PerwiraMiles = () => {
	return (
		<div id="perwira-miles" className="tabcontent-admin p-3" style={{display: 'none'}}>
              <h4>Perwira Miles</h4>
              <p>Kirim Perwira Miles Ke Pengguna</p>
              <form className="ms-auto" action="" method="">
                <p>Tujuan</p>
                <div className="d-flex justify-content-end align-items-start mb-4 gap-3" style={{width: '90%'}}>
                  <label for="silabus" className="justify-self-end fw-bold">Nama Pengguna</label>
                  <div className="col-md-9 silabus">        
                    <input type="text" className="form-control mb-2" name="silabus" id="silabus" />
                    <div className="text-start btn-tambah-wrap">
                    <button className="btn tambah-silabus">Klik untuk menambah pengguna lainnya <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.75V13.25" stroke="#FF9A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M13.25 7H0.75" stroke="#FF9A00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                      </button>
                    </div>  
                  </div>
              </div>
              <p>Nominal</p>
              <div className="d-flex justify-content-end align-items-start mb-4 gap-3" style={{width: '90%'}}>
                <label for="silabus" className="justify-self-end fw-bold">Nominal Perwira Miles</label>
                <div className="d-flex  gap-3 col-md-9 silabus">
                  <p className="m-0">PM</p>        
                  <input type="text" className="form-control mb-2 w-50" name="silabus" id="silabus" />
                </div>
            </div>
            <p>Catatan Pengiriman</p>
            <div className="d-flex justify-content-end align-items-start mb-4 gap-3" style={{width: '90%'}}>
              <label for="silabus" className="justify-self-end fw-bold">Catatan</label>
              <div className="col-md-9 silabus">        
                <input type="text" className="form-control mb-2" name="silabus" id="silabus" />
              </div>
          </div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-custom">Kirim Perwira Miles</button>
              </div>
              </form>  
            </div>
	)
}

export default PerwiraMiles