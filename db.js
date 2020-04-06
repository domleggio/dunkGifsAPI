var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://domleggio:d6DVHOnCCD7i1nJB@cluster0-estor.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true }).then(function(){
    console.log("mongoose connected successfully")
})


exports = mongoose;

  