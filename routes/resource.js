var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tunnel_controller = require('../controllers/tunnels'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// TUNNEL ROUTES /// 
 
// POST request for creating a Tunnel.  
router.post('/tunnels', tunnel_controller.tunnel_create_post); 
 
// DELETE request to delete Tunnel. 
router.delete('/tunnels/:id', tunnel_controller.tunnel_delete); 
 
// PUT request to update Tunnel. 
router.put('/tunnels/:id', tunnel_controller.tunnel_update_put); 
 
// GET request for one Tunnel. 
router.get('/tunnels/:id', tunnel_controller.tunnel_detail); 
 
// GET request for list of all Tunnel items. 
router.get('/tunnels', tunnel_controller.tunnel_list); 
 
module.exports = router;