var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://domleggio:d6DVHOnCCD7i1nJB@cluster0-estor.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true })
// mongoose.connect('mongodb://domleggio:Showtime13%21@cluster0-shard-00-00-estor.mongodb.net:27017,cluster0-shard-00-01-estor.mongodb.net:27017,cluster0-shard-00-02-estor.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});


// const options = {
//     autoIndex: false, // Don't build indexes
//     reconnectTries: 30, // Retry up to 30 times
//     reconnectInterval: 500, // Reconnect every 500ms
//     poolSize: 10, // Maintain up to 10 socket connections
//     // If not connected, return errors immediately rather than waiting for reconnect
//     bufferMaxEntries: 0
//   }


// const connectWithRetry = () => {
//     console.log('MongoDB connection with retry')
//     mongoose.connect("mongodb+srv://domleggio:<Showtime13%21>@cluster0-estor.mongodb.net/test?retryWrites=true&w=majority", options).then(()=>{
//       console.log('MongoDB is connected')
//     }).catch(err=>{
//       console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
//       setTimeout(connectWithRetry, 5000)
//     })
//   }
  
//   connectWithRetry()


//   mongoose.connect("mongodb+srv://domleggio:<Showtime13!>@cluster0-estor.mongodb.net/test?retryWrites=true&w=majority", {useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology: true }).then(function () {
//     console.log("Mongoose connected successfully <3");
//     resolve();
//   }).catch(function (error) {
//     console.log("error starting mongoose:");
//     console.log(error);
//     reject();
//   })

exports = mongoose;

  