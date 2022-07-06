const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

BrandSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Brand", BrandSchema);
