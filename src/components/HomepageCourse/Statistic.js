import React from 'react'

const Statistic = () => {
	return (
		<div className="statistik mb-5">
          	<h4 className="course-title mb-4">Statistik</h4>
	        <div className="row gap-4">
	            <div className="d-flex flex-column justify-content-between col-sm-2 statistik-card">
	                <h4 className="fw-bold text-end">4</h4>
	                <p className="m-0">Kursus dan Pelatihan</p>
	            </div>

	            <div className="d-flex flex-fill flex-column justify-content-between col-sm-3 statistik-card">
	                <h4 className="fw-bold text-end mb-3">25.3</h4>
	                <p className="fw-lighter text-secondary text-end">+3 jam dari minggu lalu</p>
	                <p className="m-0">Total Jam Belajar</p>
	            </div>

	            <div className="d-flex flex-fill flex-column justify-content-between col-sm-3 statistik-card">
	                <h4 className="fw-bold text-end mb-3">85.7%</h4>
	                <p className="fw-lighter text-secondary text-end">Diatas rata-rata</p>
	                <p className="m-0">Nilai Rata-Rata Kamu</p>
	            </div>
	        </div>
        </div>
	)
}

export default Statistic