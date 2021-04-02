import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const levelsSchema = new Schema ({
    Comments: String,
    IsFastChargeCapable: Boolean,
    Title: String,
});

export default mongoose.model('Levels', levelsSchema);
