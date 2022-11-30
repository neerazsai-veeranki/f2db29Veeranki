const mongoose = require("mongoose") 

const tunnelSchema = mongoose.Schema({ 
    len_of_tunnel: { type: Number, required: true, min: 1 }, 
    no_of_lanes: { type: Number, required: true, min: 1 }, 
    tunnel_name: { type: String, required: true },
    is_operational: { type: Boolean, required: true }
}) 
 
module.exports = mongoose.model("Tunnel", 
tunnelSchema) 