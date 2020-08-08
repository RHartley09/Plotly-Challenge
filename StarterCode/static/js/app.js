d3.json("/data/samples.json").then(function (data) {
    console.log(data);




    names1 = d3.selectAll(data.names);
    console.log(names1);
// data is an object
// because data is an object I can access key/value pairs, but not an index
// d3.keys return an array of keys
// because my keys variable is an array, I can select an index
    keys = d3.keys(data);
    console.log("hello", keys[0]);

    // for (var key in data) {
    //     if (data.hasOwnProperty(key)) {
    //         console.log(key + " -> " + data[key]);
    //     };
    // };

    var sampleNames = data.names
    console.log(sampleNames);

    Object.entries(data["samples"][0]).forEach(([key, value]) => {
        console.log(`key: ${key} and value ${value}`);
    });


    // var samps = Object.values(data["samples"][2])
    // console.log(samps);


    // var sampleNames940 = d3.selectAll(data.names).filter("940")
    // console.log(sampleNames940);

    // var smpnm = data.filter("940")
    // console.log(smpnm);

    // function trythis(data) {
    //     return data.names == "940";
    // }

    // var samp940 = data.names.filter(trythis)
    // console.log(samp940);

// var sample_values = Object.entries(data["samples"][0]).forEach(([key, value]) => {
//     console.log(`${value}`);
// });


// var get_sample_values = Object.entries(data["samples"][0]).forEach(([key, value]) => {
//     return value;
// });
// console.log(get_sample_values)

var test = data.samples[0]
console.log(test)

// var test2 = data.samples[0].filter("sample_values")
// console.log(test2)
























































})

console.log("This should render before the promise completes.");