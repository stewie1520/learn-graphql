const router = require('express').Router();

router.use('/graphql', require('./graphql'));

module.exports = router;
