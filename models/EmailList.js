import mongoose from 'mongoose';

const EmailListSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

},{
    timestamps:true
});

export default mongoose.models.EmailList || mongoose.model('EmailList',EmailListSchema);