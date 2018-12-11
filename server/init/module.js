(function() {

    log = module.exports = console.log.bind(console);
    warn = module.exports = console.warn.bind(console);
    error = module.exports = console.error.bind(console);
    http = module.exports = require("http");
    express = module.exports = require("express");
    app = module.exports = express();
    bodyParser = module.exports = require('body-parser');
    cors = module.exports = require('cors');
    jwt = module.exports = require('jwt-simple');
    moment = module.exports = require('moment');

})();