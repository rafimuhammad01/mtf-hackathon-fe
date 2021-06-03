import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { doRegisterAction } from '../../redux/auth/thunks'

const SignUp = () => {
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)

	const [registerData, setRegisterData] = useState({
		username: null,
	    password: null,
	    password2: null,
	    email: null,
	    first_name: null,
	    last_name: null
	})

	useEffect(() => {
		setRegisterData(prevState => ({
			...prevState,
			password2: registerData.password
		}))
	}, [registerData.password])

	useEffect(() => {
		if (registerData.first_name !== null){
			
			const fullname = registerData.first_name
			const split = fullname.split(' ')
			const last = split[split.length - 1]

			setRegisterData(prevState => ({
				...prevState,
				last_name: last
			}))
		}
	}, [registerData.first_name])

	const handleChange = e => {
		const { name, value } = e.target
		setRegisterData(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()

		dispatch(doRegisterAction(registerData))
	}

	return auth?.isAuthenticated ? <Redirect to="/" /> : (
		<section className="pt-3">
	        <div className="container">
	            <div className="bg"></div>
	            <h4 className="mb-4">Buat Akun Baru</h4>
	            <form className="data-setelan mb-5" onSubmit={handleSubmit}>
	                <div className="row justify-content-start mb-4 gap-3">
	                        <label for="namaLengkap" className="col-md-2 fw-bold">Nama Lengkap</label>
	                        <input onChange={handleChange} id="namaLengkap" className="col-md-6" type="text" name="first_name"/>
	                </div>
	                <div className="row justify-content-start mb-4 gap-3">
	                    <label for="username" className="col-md-2 fw-bold">Username</label>
	                    <input onChange={handleChange} id="username" className="col-md-6" type="text" name="username"/>
	                </div>
	                <div className="row justify-content-start mb-4 gap-3">
	                    <label for="email" className="col-md-2 fw-bold">Email</label>
	                    <input onChange={handleChange} id="email" className="col-md-6" type="email" name="email"/>
	                </div>
	                <div className="row justify-content-start mb-4 gap-3">
	                    <label for="noTelp" className="col-md-2 fw-bold">Nomor telepon</label>
	                    <div className="col-md-5 d-flex gap-3 p-0">
	                        <p className="m-0">+62</p>
	                        <input id="noTelp" className="col-md" type="telp"/>
	                    </div>
	                </div>
	                <div className="row justify-content-start mb-4 gap-3">
	                    <label className="control-label col-md-2 fw-bold">Kata sandi</label>
	                    <div className="col-md-6 password-group">
	                      <input onChange={handleChange} id="password-field" type="password" className="w-100 border-1 border-dark bg-transparent p-1" name="password" placeholder="Kata sandi" />
	                      <input className="show-password" type="checkbox" onclick="myFunction()"/>
	                    </div>
	                  </div>
	                  <p className="mb-4">*wajib diisi</p>
	                  <div className="d-flex justify-content-end gap-3 p-0 mb-4">
	                    <p className="m-0">Saya dengan sadar dan yakin bahwa saya mengisikan data diri saya dengan benar</p>
	                    <input id="notifikasi" className="" type="checkbox"/>
	                </div>
	                <div className="text-end">
	                  <input type="submit" className="btn btn-custom" value="Daftar akun" />
	                </div>
	            </form>
	        </div>
	    </section>
	)
}

export default SignUp