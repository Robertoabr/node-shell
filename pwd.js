function pwd (input) {
    process.stdout.write('prompt > ');

  input = data.toString().trim();

  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const path = process.cwd();
    if(cmd === 'pwd') {
        process.stdout.write(path);
        process.stdout.write('\nprompt > ');
    }
    else {
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt > ');
    }
})
}

module.exports = pwd
