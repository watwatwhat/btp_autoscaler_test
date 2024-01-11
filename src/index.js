const express = require('express');
const app = express();

// CPU intensive function 
function performIntensiveCalculation() {
  const startTime = new Date().getTime();
  let count = 0;

  // Example of a CPU intensive operation
  for (let i = 0; i < 100000000; i++) {
    for (let j = 0; j < 100; j++) {
      count += 1;
    }
  }

  const endTime = new Date().getTime();
  return { result: count, duration: endTime - startTime };
}

app.get('/', (req, res) => {
  res.send(`Autoscale test provided at /autoscale .`);
});

app.get('/autoscale', (req, res) => {
  const calculationResult = performIntensiveCalculation();
  res.send(`Result: ${calculationResult.result}, Calculation Time: ${calculationResult.duration}ms`);
});

var port = process.env.PORT || 8080
var server = app.listen(port, function () {
  console.log(`Application is listening to PORT: ${server.address().port}`);
});