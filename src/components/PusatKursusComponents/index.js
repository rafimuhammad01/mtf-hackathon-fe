import React, { Fragment } from 'react'
import SearchBar from './SearchBar'
import MyCourse from './MyCourse'
import Recommendation from './Recommendation'

const PusatKursusComponents = () => {
	return (
		<Fragment>
			<SearchBar />
			<MyCourse />
			<Recommendation />
		</Fragment>
	)
}

export default PusatKursusComponents