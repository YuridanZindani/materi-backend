const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Username harus di isi!"],
    },
    password: {
      type: String,
      require: [true, "Password harus di isi!"],
    },
    otp: {
      type: String,
      require: false
    }
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "create",
      updatedAt: "update",
    },
  }
);

const Login = mongoose.model("login", LoginSchema);

module.exports = Login;
