const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './dotenv.config' });

console.log(process.env.NODE_ENV);

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception 💥');
  console.log(err.name);

  process.exit(1);
});



mongoose.connect(process.env.DATABASE)
.then(() => {
  console.log(' Connected to database')
}).catch((err)=>{
  console.log(err)
  
  })


app.listen(8000,()=>{
  console.log("SERVER IS RUNNING AT PORT 8000")
  })



// const server = app.listen(process.env.PORT, () => {
//   console.log('listening on port ' + process.env.PORT);

// });

// process.on('unhandledRejection', (err) => {
//   console.log('Unhandled Rejection 💥');
//   console.log(err.name, err.message);

//   server.close(() => process.exit(1));
// });