import enums from './utils/Enums';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const SedziaZadania = new Schema({
    sesja: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Sesja'
    },
    zadanie: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Zadanie'
    },
    imie: {
        type: String,
        required: true
    },
    nazwisko: {
        type: String,
        required: true
    },
    daneLogowania: {
        email: {
            type: String,
            required: true
        },
        haslo: {
            type: String,
            required: true
        },
        rola: {
            type: String,
            required: true,
            enum: enums.rolaWSystemie.arr,
            default: enums.rolaWSystemie.default
        }
    }
});

export default SedziaZadania;