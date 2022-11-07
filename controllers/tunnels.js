var Tunnel = require('../models/tunnels'); 
 
// List of all Tunnels 
exports.tunnel_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel list'); 
}; 
 
// for a specific Tunnel. 
exports.tunnel_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel detail: ' + req.params.id); 
}; 
 
// Handle Tunnel create on POST. 
exports.tunnel_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel create POST'); 
}; 
 
// Handle Tunnel delete form on DELETE. 
exports.tunnel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel delete DELETE ' + req.params.id); 
}; 
 
// Handle Tunnel update form on PUT. 
exports.tunnel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel update PUT' + req.params.id); 
}; 