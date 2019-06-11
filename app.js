// from data.js
var tableData = data;

// // YOUR CODE HERE!
function call(renderData) {
   var datetime = [];
   var city = [];
   var state = [];
   var country = [];
   var shape = [];
   var durationMinutes = [];
   var comments = [];

   // Iterate through each recipe object
   renderData.forEach((data) => {

      // Iterate through each key and value
      Object.entries(data).forEach(([key, value]) => {

        // Use the key to determine which array to push the value to
        if (key === "datetime") {
          datetime.push(value);
        }
        else if (key === "city") {
          city.push(value);
        }
        else if (key === "state") {
          state.push(value);
        }
        else if (key === "country") {
          country.push(value);
        }
        else if (key === "shape") {
          shape.push(value);
        }
        else if (key === "durationMinutes") {
          durationMinutes.push(value);
        }
        else if (key === "comments") {
          comments.push(value);
        }
      });
   });
// // Use D3 to select the table
var table = d3.select("table");
// // Use D3 to select the table body
var tbody = d3.select("tbody");
// // Append one cell for the student name

for (var i = 0; i < tableData.length; i++){

  var row = tbody.append("tr");
  row.append("td").text(datetime[i]);
  row.append("td").text(city[i]);
  row.append("td").text(state[i]);
  row.append("td").text(country[i]);
  row.append("td").text(shape[i]);
  row.append("td").text(durationMinutes[i]);
  row.append("td").text(comments[i]);

  }
}

var submit = d3.select("#submit");

submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(row => row.datetime === inputValue);

    call(filteredData);

  });

call(tableData);