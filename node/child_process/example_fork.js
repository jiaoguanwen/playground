const { fork } = require("child_process");

console.log(fork);

const child = fork("./test.js");

console.log(child);

child.on("close", (code) => {
  console.log(`child process close all stdio with code ${code}`);
});

child.on("exit", (code) => {
  console.log(`child process exited with code ${code}`);
});
