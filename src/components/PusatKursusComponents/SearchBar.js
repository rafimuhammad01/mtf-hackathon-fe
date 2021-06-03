import React from 'react'

const SearchBar = () => {
	return (
		<section className=" bg-custom-lightblue py-4">
            <div className="container">
                <h2 className="mb-4">Apa yg ingin kamu pelajari?</h2>
                <div className="d-flex align-items-center mb-3">
                <form className="form  col-lg-7">
                      <input type="search" type="text" className="search" placeholder="Cari topik atau judul kursus" />
                      <button className="button"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0.75C3.54822 0.75 0.75 3.54822 0.75 7C0.75 10.4518 3.54822 13.25 7 13.25C10.4518 13.25 13.25 10.4518 13.25 7C13.25 3.54822 10.4518 0.75 7 0.75Z" stroke="white" stroke-width="1.5"/>
                        <path d="M15.25 15.25L11.5 11.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        </button>
                </form>

                <div className="col-lg-5 d-flex gap-3 align-items-end">
                    <div className="d-flex gap-3 bg-light py-2 px-3 rounded-3">
                    <i
                    ><svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0489 3.98812C13.0489 1.85508 11.5906 1 9.49095 1H4.56025C2.52515 1 1 1.79678 1 3.84586V15.2628C1 15.8255 1.60555 16.18 2.09606 15.9048L7.04465 13.1289L11.9505 15.9002C12.4418 16.1769 13.0489 15.8224 13.0489 15.2589V3.98812Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.15674 6.2168H9.83137" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      
                    </i>
                    <p className="m-0">Daftar Keinginan</p>
                    </div>
                </div>
                </div>

                <div>
                    <ul className="kategori d-flex">
                        <li><a href="">Sales</a></li>
                        <li><a href="">Credit</a></li>
                        <li><a href="">Operation</a></li>
                        <li><a href="">AR Management</a></li>
                        <li><a href="">Leadership</a></li>
                        <li><a href="">Management</a></li>
                        <li><a href="">Strategic</a></li>
                        <li><a href="">Development</a></li>
                        <li><a href="">IT</a></li>
                        <li><a href="">Business</a></li>

                    </ul>
                </div>

            </div>
        </section>
	)
}

export default SearchBar