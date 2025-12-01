//your JS code here. If required.
// Get table body
const output = document.getElementById("output");

// Show initial loading row
output.innerHTML = `
  <tr>
    <td colspan="2">Loading...</td>
  </tr>
`;

// Function to create random promise (1–3 seconds)
function createPromise() {
  const time = Math.random() * 2 + 1; // between 1 and 3 seconds

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
}

// Create 3 promises
const p1 = createPromise();
const p2 = createPromise();
const p3 = createPromise();

// Wait for all promises
Promise.all([p1, p2, p3]).then((times) => {
  
  // Clear "Loading..." row
  output.innerHTML = "";

  // Add rows for each promise
  times.forEach((time, index) => {
    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.textContent = Promise ${index + 1};

    const col2 = document.createElement("td");
    col2.textContent = time.toFixed(3);

    row.appendChild(col1);
    row.appendChild(col2);
    output.appendChild(row);
  });

  // Calculate total time (max value)
  const totalTime = Math.max(...times);

  // Add total row
  const totalRow = document.createElement("tr");

  const totalCol1 = document.createElement("td");
  totalCol1.textContent = "Total";

  const totalCol2 = document.createElement("td");
  totalCol2.textContent = totalTime.toFixed(3);

  totalRow.appendChild(totalCol1);
  totalRow.appendChild(totalCol2);
  output.appendChild(totalRow);
});
