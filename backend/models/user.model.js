const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //ce je kak space zbriše
      minlength: 3
    }
  },
  {
    timestamps: true //kdaj jeustvrjeno updated
  }
);

module.exports = mongoose.model("User", userSchema);
