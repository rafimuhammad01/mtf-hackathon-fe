import React, { Fragment } from 'react'
import { Navbar } from '../../components'

const Settings = () => {
	return (
		<Fragment>
			<Navbar />
			<section className="mt-3">
        <div className="container">
            <h4 className="mb-4">Data Akun</h4>
            <form className="mb-5">
                <div className="data-setelan ">
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="fotoProfil" className="col-md-2 fw-bold">foto Profil</label>
                    <div className="col-md-5 p-0 d-flex gap-3 align-items-start">
                        <i
                        ><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="#ff2222" className="bi bi-square-fill" viewBox="0 0 16 16">
                          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"></path>
                        </svg>
                      </i>
                      <button id="fotoProfil" className="btn btn-custom col-md-5 p-1">Ubah foto profil</button>
                    </div>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                        <label for="namaLengkap" className="col-md-2 fw-bold">Nama Lengkap</label>
                        <input id="namaLengkap" className="col-md-6" type="text"/>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="jenisKelamin" className="col-md-2 fw-bold">Jenis Kelamin</label>
                    <input id="jenisKelamin" className="col-md-6" type="text"/>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="email" className="col-md-2 fw-bold">Email</label>
                    <input id="email" className="col-md-6" type="email"/>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="kataSandi" className="col-md-2 fw-bold">Kata Sandi</label>
                    <button id="kataSandi" className="btn btn-custom col-md-2 p-1">Ubah kata sandi</button>
                </div>
              </div>
            <h4 className="mb-4">Data Pekerjaan</h4>

            <div className="data-setelan mb-5">
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="jabatan" className="col-md-2 fw-bold">Jabatan</label>
                    <input id="jabatan" className="col-md-6" type="text"/>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="divisi" className="col-md-2 fw-bold">Divisi</label>
                    <input id="divisi" className="col-md-6" type="text"/>
                </div>
                <div className="row justify-content-start mb-4 gap-3">
                    <label for="masaKerja" className="col-md-2 fw-bold">Masa Kerja</label>
                    <div className="col-md-2 d-flex gap-3 p-0">
                        <p className="m-0">Mulai</p>
                        <input id="masaKerja" className="col-md-10" type="text"/>
                    </div>
                </div>
              </div>  
            <h4 className="mb-4">Preferensi Website</h4>
            <div className="data-setelan">
            <div className="row justify-content-start mb-4 gap-3">
                <label for="bahasa" className="col-md-2 fw-bold">Bahasa</label>
                <input id="bahasa" className="col-md-6" type="text"/>
            </div>
            <div className="row justify-content-start mb-5 gap-3">
                <label for="notifikasi" className="col-md-2 fw-bold">Notifikasi</label>
                <div className="col-md-8 d-flex justify-content-start gap-3 p-0">
                    <p className="m-0">Kirimkan notifikasi melalui email</p>
                    <input id="notifikasi" className="" type="checkbox"/>
                </div>
            </div>
            <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-custom" value="simpan perubahan"/>
            </div>  
          </div>
          </form>
        </div>
    </section>
		</Fragment>
	)
}

export default Settings