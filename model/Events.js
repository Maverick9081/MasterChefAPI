import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    
    Event : {
        type:String
    },

    user : {
        type:String
    },

    poolId :{
        type:String
    },

    amount : {
        type:String
    }
})

export default mongoose.model('Event',eventSchema);