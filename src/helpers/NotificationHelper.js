import React from 'react';
import { NOTIFICATION_TYPE_SUCCESS, NOTIFICATION_TYPE_ERROR } from 'react-redux-notify';

const NOTIFICATION_DURACTION = 3000;

export const NotificationHelper = {
	success: (message) => {
		return {
			message,
			type: NOTIFICATION_TYPE_SUCCESS,
			duration: NOTIFICATION_DURACTION,
			canDismiss: true,
			icon: <i className="fa fa-check" />
		}
	},
	error: (message) => {
		return {
			message,
			type: NOTIFICATION_TYPE_ERROR,
			duration: NOTIFICATION_DURACTION,
			canDismiss: true,
			icon: <i className="fas fa-times" />
		}
	}
}