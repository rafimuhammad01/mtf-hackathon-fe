import React, { Fragment, useEffect } from 'react'
import { Navbar } from '../../components'
import Dashboard from './Dashboard'
import Kursus from './Kursus'
import Pelatihan from './Pelatihan'
import PerwiraMiles from './PerwiraMiles'
import DaftarPengguna from './DaftarPengguna'

const Admin = () => {
	useEffect(() => {
		document.querySelector('.tambah-kursus').addEventListener('click',(e) =>{
		    const first = e.target.parentElement.parentElement.parentElement
		    first.classList.add('d-none')
		    first.nextElementSibling.classList.remove('d-none')
		})

		document.querySelector('.tambah-pelatihan').addEventListener('click',(e) =>{
		    const first = e.target.parentElement.parentElement.parentElement
		    first.classList.add('d-none')
		    first.nextElementSibling.classList.remove('d-none')
		})
		  
		document.querySelector('.btn-lanjut').addEventListener('click',(e) => {
		    e.preventDefault()
		    const first = e.target.parentElement.parentElement.parentElement
		    first.classList.add('d-none')
		    first.nextElementSibling.classList.remove('d-none')
		})
		  
		document.querySelector('.tambah-silabus').addEventListener('click',(e) =>{
		    e.preventDefault()
		    const input = document.createElement("input")
		    input.classList.add('form-control')
		    input.classList.add('mb-2')
		    const silabus = document.querySelector('.silabus')
		    const wrap = document.querySelector('.btn-tambah-wrap')
		    silabus.insertBefore(input,wrap)
		})
	}, [])

	const handleOpenTab = (e, adminName) =>  {
    
	    let i, tabcontent, tablinks
	  
	    tabcontent = document.getElementsByClassName('tabcontent-admin')
	    for (i = 0; i < tabcontent.length; i++) {
	      tabcontent[i].style.display = 'none'
	    }
	  
	    tablinks = document.getElementsByClassName('tablinks-admin');
	    for (i = 0; i < tablinks.length; i++) {
	      tablinks[i].className = tablinks[i].className.replace(' active', '')
	    }
	  
	    document.getElementById(adminName).style.display = 'block'
	    e.currentTarget.className += ' active'
	}

	return(
		<Fragment>
			<Navbar />
			<section className="d-flex dashboard-body">
		        <div className="col-md-2 bg-custom-blue py-4 ps-4">
		            <ul className="p-0 tab-admin">
		                <li className="d-flex align-items-center gap-2 mb-5 tablinks-admin active"  id="defaultOpen" onClick={e => handleOpenTab(e, 'dashboard')}>
		                    <i
		                    ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		                      <path d="M1.33325 3.99992C1.33325 2.52716 2.52716 1.33325 3.99992 1.33325H17.9999C19.4727 1.33325 20.6666 2.52716 20.6666 3.99992V17.9999C20.6666 19.4727 19.4727 20.6666 17.9999 20.6666H3.99992C2.52716 20.6666 1.33325 19.4727 1.33325 17.9999V3.99992Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M8 6.66675V20.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M1.66675 6H20.3334" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      </svg>
		                      
		                  </i>
		                    <a className="link-admin" >Dashboard</a>
		                  </li>

		                  <li className="d-flex align-items-center gap-2 mb-5 tablinks-admin"  onClick={e => handleOpenTab(e, 'kursus')}>
		                    <i
		                    ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		                      <path d="M1.33325 3.99992C1.33325 2.52716 2.52716 1.33325 3.99992 1.33325H17.9999C19.4727 1.33325 20.6666 2.52716 20.6666 3.99992V13.9999C20.6666 15.4727 19.4727 16.6666 17.9999 16.6666H3.99992C2.52716 16.6666 1.33325 15.4727 1.33325 13.9999V3.99992Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M15.3334 20.6667L11.0001 18L6.66675 20.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      </svg>
		                      
		                  </i>
		                    <a className="link-admin" >Kursus</a>
		                  </li>
		                  
		                  <li className="d-flex align-items-center gap-2 mb-5 tablinks-admin"  onClick={e => handleOpenTab(e, 'pelatihan')}>  
		                    <i
		                    ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		                      <path d="M1.33325 4.00016C1.33325 2.5274 2.52716 1.3335 3.99992 1.3335H17.9999C19.4727 1.3335 20.6666 2.5274 20.6666 4.00016V18.0002C20.6666 19.4729 19.4727 20.6668 17.9999 20.6668H3.99992C2.52716 20.6668 1.33325 19.4729 1.33325 18.0002V4.00016Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M11.3334 17.3335H10.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      </svg>
		                      
		                      
		                      
		                  </i>
		                    <a className="link-admin">Pelatihan</a>
		                  </li>

		                  <li className="d-flex align-items-center gap-2 mb-5 tablinks-admin"  onClick={e => handleOpenTab(e, 'perwira-miles')}>  
		                    <i
		                    ><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		                      <path d="M21.3333 13.5749H17.1029C15.5495 13.574 14.2905 12.3159 14.2896 10.7626C14.2896 9.20923 15.5495 7.95115 17.1029 7.9502H21.3333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M17.5814 10.6984H17.2557" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.81701 1.6665H15.8493C18.8779 1.6665 21.3331 4.12172 21.3331 7.15026V14.6502C21.3331 17.6787 18.8779 20.134 15.8493 20.134H6.81701C3.78847 20.134 1.33325 17.6787 1.33325 14.6502V7.15026C1.33325 4.12172 3.78847 1.6665 6.81701 1.6665Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M6.073 6.4088H11.7149" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      </svg>
		                      
		                      
		                      
		                      
		                  </i>
		                    <a className="link-admin">Perwira Miles</a>
		                  </li>

		                  <li className="d-flex align-items-center gap-2 mb-5 tablinks-admin"  onClick={e => handleOpenTab(e, 'daftar-pengguna')}>  
		                    <i
		                    ><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
		                      <path d="M14.3332 6.00033C14.3332 8.39356 12.3931 10.3337 9.99984 10.3337C7.6066 10.3337 5.6665 8.39356 5.6665 6.00033C5.6665 3.60709 7.6066 1.66699 9.99984 1.66699C12.3931 1.66699 14.3332 3.60709 14.3332 6.00033Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      <path d="M3.12997 21H16.87C18.3925 21 19.5653 19.6908 18.8543 18.3445C17.8084 16.3641 15.4239 14 9.99996 14C4.57598 14 2.19152 16.3641 1.14561 18.3445C0.434586 19.6908 1.60741 21 3.12997 21Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		                      </svg>
		                      
		                      
		                  </i>
		                    <a className="link-admin">Daftar Pengguna</a>
		                  </li>
		            </ul>
		        </div>
		         <div class="col-md-10 p-3">
		         	<Dashboard />
		         	<Kursus />
		         	<Pelatihan />
		         	<PerwiraMiles />
		         	<DaftarPengguna />
		         </div>
	        </section>
		</Fragment>
	)
}

export default Admin