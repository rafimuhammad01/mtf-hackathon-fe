import React, { Fragment } from 'react'
import { PerwiraMilesLogo } from '../../assets'
import { Link } from 'react-router-dom'

const PerwiraMiles = () => {
	return (
		<Fragment>
			<h4 className="mb-4">My Perwira Miles</h4>
	        <div className="component-detail mb-4">
	            <div className="d-flex align-items-center gap-3  p-4">
	                <i><img src={PerwiraMilesLogo} alt=""/>
	              </i>
	              <h4 className="m-0">PM 360</h4>
	            </div>
	            <div className="detail-content p-3">
	                <div className="d-flex align-items-center gap-3 mb-3">
	                  <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
	                    <path d="M4.33333 20.6667H15.6667C17.1394 20.6667 18.3333 19.4728 18.3333 18V7.00004L12.6667 1.33337H4.33333C2.86057 1.33337 1.66666 2.52728 1.66666 4.00004V18C1.66666 19.4728 2.86057 20.6667 4.33333 20.6667Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M18 7.33329H12.3333V1.66663" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M7 15.3334H13" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M7 11.3334H13" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    </svg>
	                  <p className="m-0"><Link className="btn-merah fw-light" to="/riwayat-transaksi">Riwayat Transaksi</Link></p>
	                </div>

	                <div className="d-flex align-items-center gap-3 mb-3">
	                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
	                    <path d="M20.6667 11C20.6667 16.3388 16.3388 20.6667 11 20.6667C5.66125 20.6667 1.33334 16.3388 1.33334 11C1.33334 5.66129 5.66125 1.33337 11 1.33337C16.3388 1.33337 20.6667 5.66129 20.6667 11Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M15.3333 11C15.3333 13.3932 13.3932 15.3333 11 15.3333C8.60676 15.3333 6.66666 13.3932 6.66666 11C6.66666 8.60673 8.60676 6.66663 11 6.66663C13.3932 6.66663 15.3333 8.60673 15.3333 11Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M4.33334 17.6667L7.66667 14.3334" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M17.6667 17.6667L14.3333 14.3334" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M7.66667 7.66671L4.33334 4.33337" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    <path d="M14.3333 7.66671L17.6667 4.33337" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                    </svg>
	                    
	                  <p className="m-0"><a className="btn-merah fw-light" href="">Pusat Bantuan</a></p>
	                </div>
	            </div>
	        </div>
        </Fragment>
	)
}

export default PerwiraMiles