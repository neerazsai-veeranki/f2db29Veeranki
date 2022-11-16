var express = require('express');
var tunnels_controllers = require('../controllers/tunnels')
var router = express.Router();

/* GET Tunnels. */
router.get('/', tunnels_controllers.tunnel_view_all_Page);

/* CREATE a new Tunnel obj. */
router.post('/create', tunnels_controllers.tunnel_view_all_Page);

// PUT/UPDATE request to update Tunnel.  
router.put('/update/:id', tunnels_controllers.tunnel_update_put); 

// GET request for one Tunnel. 
router.get('/detail/:id', tunnels_controllers.tunnel_view_one_Page); 

// DELETE request for one Tunnel. 
router.delete('/delete/:id', tunnels_controllers.tunnel_detail); 

// router.get('/', function(req, res, next) {
//   res.render('tunnels', { title: 'Search Results' });
// });


module.exports = router;
