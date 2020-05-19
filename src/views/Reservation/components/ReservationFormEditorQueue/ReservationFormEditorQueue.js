import React from 'react'
import { format } from 'date-fns/esm'

import { useMutation } from '@apollo/react-hooks'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ReservationFormEditor from '../ReservationFormEditor'
import ReservationQueue from '../ReservationQueue'

import { CREATE_RESERVATION } from '@views/Reservation/gql/mutation'

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		height: '100%',
		border: `1px solid ${theme.palette.common.border}`,
		position: 'relative',
	},
}))

const doctors = [
	{ id: 'asdasdqwe', value: 'Doctor A', label: 'Doctor A' },
	{ id: 'asdasasd', value: 'Doctor B', label: 'Doctor B' },
	{ id: 'asdaasd', value: 'Doctor C', label: 'Doctor C' },
]

const patients = [
	{ id: 'asdasdfasd', value: 'Patient A', label: 'Patient A' },
	{ id: 'asasddasd', value: 'Patient B', label: 'Patient B' },
	{ id: 'asdaasdqsd', value: 'Patient C', label: 'Patient C' },
]

const ReservationFormEditorQueue = () => {
	const classes = useStyles()
	const [createReservation] = useMutation(CREATE_RESERVATION)

	const handleOnCreateReservation = ({ type, patient, doctor, time }) => {
		createReservation({
			variables: {
				reservation: {
					id: new Date().getTime(),
					type,
					patient,
					doctor,
					time: format(time, 'HH:mm - dd/MM/yyyy'),
					unixTime: time.getTime(),
					__typename: 'ReservationInput',
				},
			},
		})
	}

	return (
		<Box className={classes.root}>
			<ReservationFormEditor
				patients={patients}
				doctors={doctors}
				handleOnCreateReservation={handleOnCreateReservation}
			/>
			<ReservationQueue />
		</Box>
	)
}

export default ReservationFormEditorQueue