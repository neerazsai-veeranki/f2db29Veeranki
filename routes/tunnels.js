var express = require('express');
var tunnels_controllers = require('../controllers/tunnels')
var router = express.Router();

/* GET Tunnels. */
router.get('/', tunnels_controllers.tunnel_view_all_Page);

/* CREATE a new Tunnel obj. */
router.get('/create', tunnels_controllers.tunnel_create_Page);

// PUT/UPDATE request to update Tunnel.  
router.get('/update', tunnels_controllers.tunnel_update_Page); 

// GET request for one Tunnel. 
router.get('/detail', tunnels_controllers.tunnel_view_one_Page); 

// DELETE request for one Tunnel. 
router.get('/delete', tunnels_controllers.tunnel_delete_Page); 

// router.get('/', function(req, res, next) {
//   res.render('tunnels', { title: 'Search Results' });
// });


module.exports = router;
