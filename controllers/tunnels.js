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
        res.render('tunnels', { title: 'Tunnel Search Results', results: theTunnel }); 
    } 
    catch(error){ 
        res.status(500); 
        res.send(`{"error": ${error}}`); 
    }   
}; 

// for a specific Tunnel. 
exports.tunnel_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Tunnel.findById(req.params.id) 
        console.log(result)
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
exports.tunnel_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`) 
    let toUpdate = await Tunnel.findById( req.params.id) 
    try { 
        // Do updates of properties 
        if(req.body.len_of_tunnel)  
            toUpdate.len_of_tunnel = req.body.len_of_tunnel; 
        if(req.body.no_of_lanes) 
            toUpdate.no_of_lanes = req.body.no_of_lanes; 
        if(req.body.tunnel_name) 
            toUpdate.tunnel_name = req.body.tunnel_name; 
        if(req.body.is_operational) 
            toUpdate.is_operational = true; 
        else
            toUpdate.is_operational = false;
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 