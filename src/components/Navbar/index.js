import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom' 
import { doLogoutRequest } from '../../redux/auth/actions'
import { LogoJpg, Avatar } from '../../assets'

const Navbar = () => {
	const dispatch = useDispatch()

	const handleLogout = e => {
		e.preventDefault()
		dispatch(doLogoutRequest())
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light">
		    <div className="container-fluid">
		        <Link className="navbar-brand ms-5" to="/"><img src={LogoJpg} alt="" /></Link>
		        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		        	<span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarNavDropdown">
		         	<ul className="navbar-nav mr-auto">
			            <li className="nav-item">
			              	<Link className="nav-link active" aria-current="page" to="/">Beranda</Link>
			            </li>
			            <li className="nav-item">
			              	<Link className="nav-link" to="/page-kursus">Pusat Kursus</Link>
			            </li>
			            <li className="nav-item">
			              	<Link className="nav-link" to="/dilan">Dilan</Link>
			            </li>
			            <li className="nav-item">
			              	<Link className="nav-link" to="/page-schedule">Mulan</Link>
			            </li>
		          	</ul>
		          	<ul className="navbar-nav ms-auto me-lg-5">
			            <li className="nav-item">
			            	<Link className="nav-link" href="#">3.600</Link>
			            </li>
			            <li className="nav-item dropdown">
			            	<img className="user-image d-inline" src={Avatar} alt="" />
			              	<a className="nav-link d-inline-flex" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Username</a>
			              	<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			              		<li><Link className="dropdown-item" to="/admin">Admin</Link></li>
				                <li><Link className="dropdown-item" to="/notifikasi">Notifikasi</Link></li>
				                <li><Link className="dropdown-item" to="/setelan">Setelan</Link></li>
				                <li><a onClick={handleLogout} className="dropdown-item" href="#">Keluar</a></li>
			              	</ul>
			            </li>
		          	</ul>
		        </div>
		    </div>
	    </nav>
	)
}

export default Navbar