const { Schema, model } = require('mongoose');

const ExportacionSchema =({
    producto: {
        type: String,
        unique: true,
        required:true
    },
    kilos: {
        type: Number,
        required:true
    },
    precioKilo: {
        type: Number,
        required:true
    },
    precioDolar: {
        type: Number,
        required:true
    }
});

module.exports = model('Exportaciones', ExportacionSchema);
