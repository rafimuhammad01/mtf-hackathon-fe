import React, { Fragment, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { Avatar, Logo1} from '../../assets'
import { doLoginAction } from '../../redux/auth/thunks'

const SignIn = () => {
	const dispatch = useDispatch()
	const auth = useSelector(state => state.auth)

	const [loginData, setLoginData] = useState({
		username: '',
		password: ''
	}) 

	const showPasswordRef = useRef(null)
	const passwordFieldRef = useRef(null)

	
	const handleChange = e => {
		const { name, value } = e.target
		setLoginData(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(doLoginAction(loginData))
	}

	return auth?.isAuthenticated ? <Redirect to="/" /> : (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-light px-3 py-4" style={{backgroundColor: '#09215D',color:'#fff'}}>
		      <div className="d-flex align-items-center justify-content-start">
		        <Link className="navbar-brand" to="/"><img src={Logo1} alt=""/></Link>
		        <h5 className="title-course m-0">The Complete SQL Bootcamp 2021:from Zero to Hero SQL</h5>
		      </div>

		      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>
		      <div className="collapse navbar-collapse" id="navbarNavDropdown">
		        <ul className="navbar-nav ms-auto">
		          <li className="nav-item">
		            <img className="user-image d-inline" src={Avatar} alt="" />
		            <a className="nav-link d-inline-flex" style={{color:'#fff'}}>Username</a>
		          </li>
		        </ul>
		      </div>
		    </nav>
		    <section className="landing-login">
		        <div className="container mx-auto row justify-content-between" style={{height: '90vh'}}>
		            <div className="col-md-5 pt-5">
		                <h2 className="fw-bold mb-3">Selamat Datang</h2>
		                <h5>di E-Learning Center Mandiri Tunas Finance</h5>
		                <p className="mb-3">
		                    Website ini berisi fasilitas pembelajaran akan pemahaman bisnis mandiri Tunas Fnance dan sekaligus training-training dari modul-modul pembelajaran yang diberikan untuk seluruh karyawan mandiri Tunas Finance
		                </p>
		                <p>
		                    Diharapkan dengan fasilitas training center ini dapat memfasilitasi seluruh karyawan dengan pengetahuan secara umum dan khusus akan bisnis mandiri tunas finance
		                </p>
		            </div>
		            <div className="login-col col-md-5 align-self-stretch">
		              <div className="card p-4 mt-5 mx-auto" style={{width: '80%'}}>
		                <h4 className="mb-5">Masuk</h4>
		                <form className="form-horizontal mb-3" method="" action="" onSubmit={handleSubmit}>
		                    <div className="form-group mb-3">
		                      <label className=" control-label mb-2">Masukkan Nama Pengguna kamu</label>
		                      <div className="col-md-12">
		                        <input type="text" onChange={handleChange} className="w-100 border-1 border-dark bg-transparent p-1 form-control" name="username" value={loginData.username} placeholder="Nama Pengguna" />
		                      </div>
		                    </div>
		                    <div className="form-group">
		                      <label className="control-label mb-2">Masukkan kata sandi kamu</label>
		                      <div className="col-md-12 password-group">
		                        <input onChange={handleChange} ref={showPasswordRef} id="password-field" type="password" className="w-100 border-1 border-dark bg-transparent p-1 form-control" name="password" placeholder="Kata sandi" value={loginData.password} />
		                        <input ref={passwordFieldRef} className="show-password" type="checkbox" onclick="myFunction()"/>
		                      </div>
		                    </div>
			                  <a href="" className="btn-merah text-secondary mb-5 d-flex justify-content-end">Saya lupa kata sandi</a>
			                  <div className="d-flex flex-column align-items-center gap-4">
			                    <button type="submit" className="btn btn-custom px-4">masuk</button>
			                    <Link to="/buat-akun" className="btn-merah text-secondary">Saya belum memiliki akun</Link>
			                  </div>
		                  </form>
		            </div>
		            </div>
		        </div>
		    </section>
	    </Fragment>
	)
}

export default SignIn