import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const stationsSchema = new Schema ({
    Title: String,
    AddressLine1: String,
    Town: String,
    StateOrProvince: String,
    Postcode: String,
    Location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
        }
    },
    Connections:[{type: mongoose.Schema.Types.ObjectID, ref: 'Connections'}]
});

export default mongoose.model('Stations', stationsSchema);
