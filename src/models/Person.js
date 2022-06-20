const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

PersonSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Person", PersonSchema);
