var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://domleggio:d6DVHOnCCD7i1nJB@cluster0-estor.mongodb.net/dunks?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true }).then(function(error){
    console.log(error)
    console.log("mongoose connected successfully")
})


exports = mongoose;

  