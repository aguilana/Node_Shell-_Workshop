/* eslint-disable */// 

// The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim(); //remove the newline
//     process.stdout.write(process.cwd())

//     if (cmd[0] === 'pwd'){
//         process.stdout.write(`/npwd was entered`)
//     }
//     if (cmd[0] === 'ls'){
//         process.stdout.write(`/nls was entered`)
//     }
//     if (cmd[1] === 'cat'){
//         process.stdout.write(`/nshow the file name ${cmd[1]}`)
//     }

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
// });



module.exports = function() {
    //Output a prompt
    process.stdout.write('prompt > ');

    // The stdin 'data' event fires after a user types in a line
    process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); //remove the newline

      if (cmd === 'pwd'){
          process.stdout.write(`This is the CWD ---> ${process.cwd()}`)
          process.stdout.write('\nprompt > ');
      }

    // process.stdout.write('You typed this: ' + cmd);
    // process.stdout.write('\nprompt > ');
  });
}
  