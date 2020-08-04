// const url = "C:\Users\rober\Desktop\Plotly-Challenge\StarterCode\samples.json";

// // Fetch the JSON data and console log it
// d3.json(url).then(function(data) {
//   console.log(data);
// });

// // Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);

d3.json("samples.json", function(data) {
    console.log(data);
});