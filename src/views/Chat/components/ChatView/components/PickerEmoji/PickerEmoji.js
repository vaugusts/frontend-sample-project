import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, ClickAwayListener } from '@material-ui/core'
import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

PickerEmoji.propTypes = {}

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
		display: 'flex',
	},
	root__areainput__icon: {
		fontSize: 20,
		margin: theme.spacing(0, 1, 0, 2),
		cursor: 'pointer',
	},
}))

const stylePicker = { position: 'absolute', bottom: '30px', right: '10px' }
export default function PickerEmoji({ handleAddEmoji }) {
	const classes = useStyles()
	const [open, setOpen] = useState(false)

	const _onSelect = value => {
		handleAddEmoji(value)
	}

	const handleClickAway = () => {
		setOpen(false)
	}
	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<Box className={classes.root}>
				<InsertEmoticonIcon
					className={classes.root__areainput__icon}
					onClick={() => setOpen(!open)}
				/>
				{open && (
					<Picker
						set='facebook'
						style={stylePicker}
						onSelect={_onSelect}
						title='Pick your emoji…'
						emoji='point_up'
						emojiSize={24}
					/>
				)}
			</Box>
		</ClickAwayListener>
	)
}
PickerEmoji.propTypes = {
	handleAddEmoji: PropTypes.func,
}

PickerEmoji.defaultProps = {
	handleAddEmoji: () => {},
}
