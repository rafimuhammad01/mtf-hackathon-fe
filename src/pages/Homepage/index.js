import React, { useState, useEffect, Fragment } from 'react'
import { Navbar, HomepageCourse } from '../../components'

const Homepage = () => {
	return (
		<Fragment>
			<Navbar />
			<HomepageCourse />
		</Fragment>
	)
}

export default Homepage