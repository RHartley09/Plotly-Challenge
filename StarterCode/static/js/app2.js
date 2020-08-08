const url = "https://rhartley09.github.io/Plotly-Challenge/data/samples.json";

// Fetch the JSON data and console log it
var data = d3.json(url).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// var names = students.map(function(student) {
//     return student.name;
//   });
   
// var samples1 = data.map(function(dat) {
//     return dat.samples;
// })
// console.log("Here are my:", samples1);
    
// d3.json("samples.json").then((data) => {       var sampleNames = data.names;});
// console.log(sampleNames);

// users.forEach((user) => {
//     console.log(user);

//   // Get the entries for each object in the array
//   Object.entries(user).forEach(([key, value]) => {
//     // Log the key and value
//     console.log(`Key: ${key} and Value ${value}`);
// data.forEach((data1) => {
//     console.log(data1);
// });
      
// Object.entries(data).forEach(([key, value]) => {
//     console.log(`key: ${key} and value ${value}`);
// });

// data.forEach(function(Getnames) {
//     console.log(`${data.names}`);
// });

// Object.keys(data).forEach((key) => {
//     console.log(`key: ${key}`);
// });

// console.log("");

// var names = data.map(function(getnames) {
//     console.log(data.names);
// });

// names1 = d3.selectAll(data.names);
// console.log("closer", names1); 

// var names2 = d3.json(url).then(function(namer) {
//     d3.selectAll(data.names);
//     console.log(names2)
// });

// var giveMeSomething = d3.json(url).then(function(idk) {
//     data.forEach(([key, value]) => {
//         console.log(`key: ${key} and value ${value}`);   
//     });
// });

// var names4 = data.names;
// console.log(names4);

// var metadata1 = data.metadata;
// console.log(metadata1);

// var names5 = d3.json(data.names);
// console.log(names5);

// var iHopeThisWorks = d3.json("samples.json").then((data) => {data.names});
// console.log(iHopeThisWorks);

// // var sampleNames = data.names;
// d3.json("samples.json").then((data) => {
//     var sampleNames = data.names});
// console.log(sampleNames);
