import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { 
	Homepage, 
	PusatKursus, 
	Dilan, 
	Mulan, 
	SignUp, 
	SignIn, 
	Notification, 
	Settings, 
	DetailKursus, 
	RiwayatTransaksi,
	ScheduleDetail,
	Admin
} from '../pages'
import { SecureRoute } from '../components'

export const Routes = () => {
	return (
		<Router>
			<Switch>
				<SecureRoute path="/" exact component={Homepage} />
				<SecureRoute path="/page-kursus" component={PusatKursus} />
				<SecureRoute path="/dilan" component={Dilan} />
				<SecureRoute path="/page-schedule" component={Mulan} />
				<SecureRoute path="/notifikasi" component={Notification} />
				<SecureRoute path="/setelan" component={Settings} />
				<SecureRoute path="/detail-kursus/:id" component={DetailKursus} />
				<SecureRoute path="/riwayat-transaksi" component={RiwayatTransaksi} />
				<SecureRoute path="/schedule-detail" component={ScheduleDetail} />
				<Route path="/login" component={SignIn} />
				<Route path="/buat-akun" component={SignUp} />
				<Route path="/admin" component={Admin} />
			</Switch>
		</Router>
	)
}