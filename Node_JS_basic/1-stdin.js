process.stdin.setEncoding('utf8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  const input = data.trim();
  console.log(`Your name is: ${input}`);
  if (input === 'data') {
    console.log('This important software is now closing');
    process.exit(0);
  } else {
    process.exit(1);
  }
});
