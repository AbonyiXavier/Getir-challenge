const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  minCount: {
    type: Number,
  },
  maxCount: {
    type: Number,
  },
});

module.exports = mongoose.model("Record", RecordSchema);
