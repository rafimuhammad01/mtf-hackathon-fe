import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getKursusAction } from '../../redux/pusatKursus/thunks'
import { Navbar, PusatKursusComponents } from '../../components'

const PusatKursus = () => {
	const dispatch = useDispatch()
	const selectKursus = useSelector(state => state.kursus)

	useEffect(() => {
		dispatch(getKursusAction())
	}, [])

	return (
		<Fragment>
			<Navbar />
			<PusatKursusComponents />
		</Fragment>
	)
}

export default PusatKursus

