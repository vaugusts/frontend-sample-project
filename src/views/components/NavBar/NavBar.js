import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import teal from '@material-ui/core/colors/teal'

import { deleteToken } from '@src/shares/utils'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		backgroundColor: teal[600],
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
	},
	tab: {
		fontSize: theme.typography.htmlFontSize,
		fontWeight: theme.typography.fontWeightMedium,
		color: theme.palette.common.white,
		cursor: 'pointer',
		padding: `${theme.spacing(3)}px ${theme.spacing(1.5)}px`,
		textAlign: 'center',
		transition: `all ${theme.transitions.duration.shorter}ms ${theme.transitions.easing.easeInOut}`,
		'&:last-child': {
			position: 'absolute',
			bottom: 0,
		},
	},
	active: {
		backgroundColor: theme.palette.common.white,
		color: theme.palette.text.primary,
	},
}))

const NavBar = ({ location, history }) => {
	const [currentPage, setCurrentPage] = React.useState(location.pathname)
	const classes = useStyles()
	const handleOnChangePage = page => {
		setCurrentPage(page)
		history.push(page)
	}
	return (
		<ul className={classes.root}>
			<li
				className={`${classes.tab} ${
					currentPage === '/' ? classes.active : ''
				}`}
				onClick={() => handleOnChangePage('/')}
			>
				main
			</li>
			<li
				className={`${classes.tab} ${
					currentPage === '/user' ? classes.active : ''
				}`}
				onClick={() => handleOnChangePage('/user')}
			>
				user
			</li>
			<li
				className={`${classes.tab} ${
					currentPage === '/message' ? classes.active : ''
				}`}
				onClick={() => handleOnChangePage('/message')}
			>
				message
			</li>
			<li
				className={classes.tab}
				onClick={() => {
					deleteToken()
					handleOnChangePage('/sign-in')
				}}
			>
				Logout
			</li>
		</ul>
	)
}

NavBar.propsTypes = {}

export default withRouter(NavBar)