const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
   {
      firstName: {
         type: String,
         required: true
      },
      lastName: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true
      },
      photo: {
         type: String
      },
      googleId: {
         type: String
      }
   },
   {
      timestamps: true
   }
)

module.exports = mongoose.model('User', userSchema);