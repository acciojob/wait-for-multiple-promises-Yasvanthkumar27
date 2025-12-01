// Get table body
var output = document.getElementById("output");

// Initial "Loading..." row with id="loading"
output.innerHTML = '<tr id="loading"><td colspan="2">Loading...</td></tr>';

// Function to create one promise with random delay between 1 and 3 seconds
function createPromise() {
  // time in seconds: 1 <= t < 3
  var time = Math.random() * 2 + 1;

  return new Promise(function (resolve) {
    setTimeout(function () {
      // resolve with the time taken (seconds)
      resolve(time);
    }, time * 1000);
  });
}

// Create 3 promises
var p1 = createPromise();
var p2 = createPromise();
var p3 = createPromise();

// Wait for all promises to resolve
Promise.all([p1, p2, p3]).then(function (times) {
  // Remove the "Loading..." row
  output.innerHTML = "";

  // times is an array [t1, t2, t3]
  for (var i = 0; i < times.length; i++) {
    var tr = document.createElement("tr");

    var tdName = document.createElement("td");
    tdName.textContent = "Promise " + (i + 1);

    var tdTime = document.createElement("td");
    tdTime.textContent = times[i].toFixed(3); // e.g., "2.000"

    tr.appendChild(tdName);
    tr.appendChild(tdTime);
    output.appendChild(tr);
  }

  // Total row – time for all promises to resolve (max of the three)
  var maxTime = Math.max(times[0], times[1], times[2]);

  var totalRow = document.createElement("tr");

  var totalName = document.createElement("td");
  totalName.textContent = "Total";

  var totalTime = document.createElement("td");
  totalTime.textContent = maxTime.toFixed(3);

  totalRow.appendChild(totalName);
  totalRow.appendChild(totalTime);
  output.appendChild(totalRow);
});
