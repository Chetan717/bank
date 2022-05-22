const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill the information'],
        
      },  
      
      amount:{
        type:Number,
        required:true
    },
    
},
{
    timestamps: true,
}
)

 

module.exports = mongoose.model('Account', accountSchema)