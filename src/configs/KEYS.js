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
    }
}

export default KEYS;