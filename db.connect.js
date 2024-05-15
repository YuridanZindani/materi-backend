var mongoose = require("mongoose");

 const database = "mongodb+srv://adminvender8127:Cz8br3vXT2SDLF2h@materi-nosql.w6xmu7m.mongodb.net/";

const dbConnect = () => {
  const mongoURI= database;

   mongoose.connect(mongoURI, {
     connectTimeoutMS: 15000,
   });
   let db = mongoose.connection;
   db.on("error", console.log.bind(console, "database connection error"));
   db.once("open", function () {
     console.log("MONGODB CONNECTED TO DATABASE!");
  });
};

module.exports = dbConnect;