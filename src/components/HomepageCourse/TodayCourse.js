import React from 'react'

const TodayCourse = () => {
	return (
		<div className="pelat-hari-ini">
          	<h4 className="mb-4">Pelatihan Hari Ini</h4>
	        <div className="d-flex justify-content-between mb-4">
	            <p className="m-0">Senin,22 April 2021</p>
	            <div className="d-flex gap-2 btn-custom-outline align-items-center ">
	              	<button className="btn">
	              		<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
	                		<path d="M4.25 1.25L0.75 4.5L4.25 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                	</svg>
	                </button>
	                <svg width="2" height="25" viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
	                  	<line opacity="0.15" x1="0.75" y1="3.27835e-08" x2="0.749999" y2="25" stroke="black" stroke-width="1.5"/>
	                </svg>
	              	<button className="btn">
	                	<svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
	                  		<path d="M0.75 1.25L4.25 4.5L0.75 7.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
	                  	</svg> 
	              	</button>
	          	</div>
	        </div>
	        <table className="w-100 table table-striped">
	          	<thead className="bg-custom-lightblue text-secondary">
		          	<tr>
			            <th scope="col" className="fw-light p-2">
			              Nama Pelatihan
			            </th>
			            <th scope="col" className="fw-light">
			              Topik
			            </th>
			            <th scope="col" className="fw-light">
			              Penyelenggara
			            </th>
			            <th scope="col" className="fw-light">
			              Waktu
			            </th>
		          	</tr>
	        	</thead>
		        <tbody>
			        <tr scope="row">
				        <td><strong>pelatihan1</strong></td>
				        <td>TopikPelatihan1</td>
				        <td>Techforld</td>
				        <td>08.00 - 14.00</td>
			        </tr>

			        <tr scope="row">
			          	<td><strong>pelatihan1</strong></td>
			          	<td>TopikPelatihan1</td>
			          	<td>Techforld</td>
			          	<td>08.00 - 14.00</td>
			        </tr>

			        <tr scope="row">
			          	<td><strong>pelatihan1</strong></td>
			          	<td>TopikPelatihan1</td>
			          	<td>Techforld</td>
			          	<td>08.00 - 14.00</td>
			        </tr>

			        <tr scope="row">
			          	<td><strong>pelatihan1</strong></td>
			          	<td>TopikPelatihan1</td>
			          	<td>Techforld</td>
			          	<td>08.00 - 14.00</td>
			        </tr>
		        </tbody>
	        </table>  
      	</div>
	)
}

export default TodayCourse