var express = require('express');
var tunnels_controllers = require('../controllers/tunnels')
var router = express.Router();

/* GET Tunnels. */
router.get('/', tunnels_controllers.tunnel_view_all_Page);

// GET request for one Tunnel. 
router.get('/:id', tunnels_controllers.tunnel_detail); 

// PUT request to update Tunnel.  
router.put('/:id', tunnels_controllers.tunnel_update_put); 

// router.get('/', function(req, res, next) {
//   res.render('tunnels', { title: 'Search Results' });
// });


module.exports = router;
