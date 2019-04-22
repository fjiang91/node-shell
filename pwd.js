function pwd () {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};

// const myProcess = require('process');


// function pwd(){
//   myProcess.cwd('./', 'utf8', (err, files) => {
//     if (err){
//       throw err;
//     } else {
//   		process.stdout.write(process.cwd());
//   		process.stdout.write('\nprompt > ');
//     }
//   })
// }

module.exports = {
  pwd
};
