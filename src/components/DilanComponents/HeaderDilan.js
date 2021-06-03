import React from 'react'

const HeaderDilan = () => {
	return (
		 <section className="jumbotron text-center pb-5">
      		<h1 className="display-2">Dilan</h1>
	      <p className="text-xxl-center mt-3">Dictionary and Glossary Learning</p>
	      <div className="justify-content-center">
	        <form className="ms-auto me-auto w-50 col-12 col-lg-auto">
	          <div className="form">
	            <input type="search" type="text" className="search" placeholder="Cari materi, istilah, atau jawaban yang kamu tanyakan.." />
	            <input type="submit" className="button" value=" " />
	          </div>
	        </form>
	        <h5>atau</h5>
	        <button type="button" className="btn btn-custom"  data-bs-toggle="modal" data-bs-target="#pertanyaanModal">
	          Ajukan Pertanyaan
	        </button>
	        <div className="modal fade" id="pertanyaanModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div className="modal-dialog modal-dialog-centered modal-lg">
				    <div className="modal-content">
				      <div className="modal-body">
				        <form action="#" className="form-group">
				          <textarea className="form-control modal-header fs-4 border-0" placeholder="Tulis Judul Pertanyaan..." cols="25" rows="1"></textarea>
				          <textarea className="form-control border-0" placeholder="Tulis dan jelaskan apa yang mau kamu tanyakan" cols="30" rows="6"></textarea>
				        </form>
				      </div>
				      <div className="modal-footer border-0">
				        <div className="dropdown me-auto">
				          <button className="btn btn-custom-outline d-flex align-items-center gap-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				            Semua Transaksi
				            <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
				              <line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
				              </svg>
				              
				            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
				              <path d="M7.25 0.75L4 4.25L0.75 0.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
				              </svg>
				              
				          </button>
				          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				            <li><a className="dropdown-item" href="#">topik 1</a></li>
				            <li><a className="dropdown-item" href="#">topik 2</a></li>
				            <li><a className="dropdown-item" href="#">topik 3</a></li>
				          </ul>
				        </div>
				        <button type="button" className="btn btn-custom">Submit Pertanyaanmu</button>
				      </div>
				    </div>
				  </div>
				</div>
	         </div>
	    </section>
	)
}

export default HeaderDilan