var Tunnel = require('../models/tunnels'); 
 
// List of all Tunnels 
exports.tunnel_list = async function(req, res) {
    try {
        theTunnel = await Tunnel.find();
        res.send(theTunnel);
    } catch (error) {
        res.status(500);
        res.send(`{"error": ${error}}`);
    } 
    // res.send('NOT IMPLEMENTED: Tunnel list'); 
}; 
 
// VIEWS 
// Handle a show all view 
exports.tunnel_view_all_Page = async function(req, res) { 
    try{ 
        theTunnel = await Tunnel.find(); 
        res.render('tunnels', { title: 'Costume Search Results', results: theTunnel }); 
    } 
    catch(error){ 
        res.status(500); 
        res.send(`{"error": ${error}}`); 
    }   
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