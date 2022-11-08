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
exports.tunnel_create_post = async function(req, res) { 
    console.log(req.body);
    let doc = new Tunnel();
    doc.len_of_tunnel = req.body.len_of_tunnel
    doc.no_of_lanes = req.body.no_of_lanes
    doc.tunnel_name = req.body.tunnel_name
    doc.is_operational = req.body.is_operational
    try{ 
        let result = await doc.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }
}; 
 
// Handle Tunnel delete form on DELETE. 
exports.tunnel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel delete DELETE ' + req.params.id); 
}; 
 
// Handle Tunnel update form on PUT. 
exports.tunnel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tunnel update PUT' + req.params.id); 
}; 