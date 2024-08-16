const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    role: {
        type: String,
        required: false,
        default: 'admin'
    },
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;