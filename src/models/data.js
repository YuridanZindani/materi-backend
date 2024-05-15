const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      require: [true, "Nama harus di isi!"],
    },
    umur: {
        type: Number,
        require: [true, "Umur harus di isi!"],
      },
    nomor_tlpn: {
      type: String,
      require: [true, "Nomor telpon harus di isi!"],
    },
    alamat: {
      type: String,
      require: true,
      default: "Indonesia",
    },
    berat_badan: {
      type: Number,
      require: [true, "Berat badan harus di isi!"],
    },
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: "create",
      updatedAt: "update",
    },
  }
);

const Data = mongoose.model("data", DataSchema);

module.exports = Data;