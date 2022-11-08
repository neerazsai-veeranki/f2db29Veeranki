var express = require('express');
var tunnels_controllers = require('../controllers/tunnels')
var router = express.Router();

/* GET Tunnels. */
router.get('/', tunnels_controllers.tunnel_view_all_Page);

// router.get('/', function(req, res, next) {
//   res.render('tunnels', { title: 'Search Results' });
// });


module.exports = router;
