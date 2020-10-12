const { exec } = require("child_process");

console.log(exec);

const child = exec(
  'echo "The \\$HOME variable is $HOME"',
  (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  }
);

child.on("close", (code) => {
  console.log(`child process close all stdio with code ${code}`);
});

child.on("exit", (code) => {
  console.log(`child process exited with code ${code}`);
});
