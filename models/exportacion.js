const { Schema, model } = require('mongoose');

const ExportacionSchema =({
    producto: {
        type: String,
        unique: true
    },
    kilos: {
        type: Number
    },
    precioKilo: {
        type: Number
    },
    precioDolar: {
        type: Number
    }
});

module.exports = model('Exportacion', ExportacionSchema);
