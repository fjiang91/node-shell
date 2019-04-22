const { pwd } = require('./pwd');
const { ls } = require('./ls');
const { cat } = require('./cat');
const { curl } = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmdArray = data.toString().trim().split(" ");
  const cmd = cmdArray[0];

  let param;
  if (cmdArray[1]) {
  	param = cmdArray[1];
  } 
  //come back and imp for more than one file


  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat'){
  	cat(param)
  } else if (cmd === 'curl'){
  	curl(param);
  }
})
