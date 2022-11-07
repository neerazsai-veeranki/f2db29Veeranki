const mongoose = require("mongoose") 

const tunnelSchema = mongoose.Schema({ 
    len_of_tunnel: Number, 
    no_of_lanes: Number, 
    tunnel_name: String,
    is_operational:Boolean 
}) 
 
module.exports = mongoose.model("Tunnel", 
tunnelSchema) 