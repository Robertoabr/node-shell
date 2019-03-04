process.stdout.write('prompt > ')

process.stdin.ok('data', (data) => {
  const cmd = data.toString().trim();
  const path = process.cwd();
  if(cmd === 'pwd'){
    process.stout.write(path)
  }
})
