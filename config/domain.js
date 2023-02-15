

const WHITELIST_DOMAIN = ['http://localhost:3000, http://localhost:3001,https://api-qnog.onrender.com'];

const corsOptions = {
    origin: function(origin, callback) {
        if (WHITELIST_DOMAIN.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error(`${origin} is not allowed by CORS`))
        }
    },
    credentials: true,
    optionSuccessStatus: 200,
}
