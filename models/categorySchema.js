const mongoose = require('mongoose');
const {Schema} = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        default: false
    },
    subcategory:[{
        type: Schema.Types.ObjectId,
        ref: "SubCategory"
    }],
    status:{
        type: String,
        default: "pending",
        enum: ["pending", "approved","rejected"]
    },
    created:{
        type: Date,
        default: new Date()
    },
    updated:{
        type: Date
    }
})

module.exports = mongoose.model("Catagory", categorySchema);