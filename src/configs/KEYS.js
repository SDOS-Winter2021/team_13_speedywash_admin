/**
 * @module
 */
/**
 * Contains mapping of keys to string that are globally available to all parts of application, READ-ONLY
 * @returns {void} - Nothing
 */
const KEYS = {
    DATABASE: {
        COLLECTIONS: {
            ADMINS: "Admins",
            TEST: "Test",
            SERVICES: "homepage",
            ORDERS: "incompleteOrders",
            ADVERTISEMENT: "advertisement",
            USERS: "users"
        },
        ATTRIBUTES: {
            NAME: "name",
        }
    },
    LOCAL_STORAGE: {
        USER: "@speedywash:user",
        SERVICES: {},
        ORDERS: {}
    },
    COLORS: {
        HIGHLIGHT: "#2196F3",
        MAIN: "#006BAD",
        FOOTER_SELECTED: "#8c8c8c",
        FOOTER_NORMAL: "#FFFFFF",
        HOMEBACKGROUND: '#DCF2FD',
        AVATAR: '#A9CCE3'
    },
    TIME: {
        SECOND: 1000,
        MINUTE: 60 * 1000,
        HOUR: 60 * 60 * 1000,
        DAY: 24 * 60 * 60 * 1000,
        WEEK: 7 * 24 * 60 * 60 * 1000
    },
	orderStatus: {
		PLACED: {
			stage: 1,
			stageName: "PLACED",
			message: "Pickup Pending"
		},
		PICKUPDONE: {
			stage: 2,
			stageName: "PICKUPDONE",
			message: "Service Pending"
		},
		SERVICEDONE: {
			stage: 3,
			stageName: "SERVICEDONE",
			message: "Delivery Pending"
		},
		COMPLETED: {
			stage: 4,
			stageName: "COMPLETED",
			message: "Completed"
		}
	}
}

export default KEYS;