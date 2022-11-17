mongoose = require('mongoose')
mongoose.connect('mongodb+srv://flups:0104188116@cluster0.xdmyh8h.mongodb.net/?retryWrites=true&w=majority')
    .then( app.listen(3000))
    .catch(err => console.log(err))
