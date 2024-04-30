// Get form elements
var form = document.getElementById('mealPlanForm');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var goalInput = document.getElementById('goal');
var breakfastInput = document.getElementById('breakfast');
var snack1Input = document.getElementById('snack1');
var lunchInput = document.getElementById('lunch');
var snack2Input = document.getElementById('snack2');
var dinnerInput = document.getElementById('dinner');

// Function to validate email
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to generate meal plan
function generateMealPlan() {
  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var goal = goalInput.value.trim();
  var breakfast = breakfastInput.value.trim();
  var snack1 = snack1Input.value.trim();
  var lunch = lunchInput.value.trim();
  var snack2 = snack2Input.value.trim();
  var dinner = dinnerInput.value.trim();

  // Validate email
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Create a new window
  var newWindow = window.open('', 'mealPlanWindow', 'width=800,height=600');
  var doc = newWindow.document;

  // HTML content to the new window
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Meal Plan</title>
      <style>
        body {
          font-family: monospace;
        }
        .meal-plan {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-gap: 10px;
        }
        .day {
          border: 1px solid #ccc;
          padding: 10px;
        }
      </style>
    </head>
    <body>
      <h1>Meal Plan for ${name}</h1>
      <p><strong>Weekly Goal:</strong> ${goal}</p>
      <div class="meal-plan">
  `);

  // Meal plan for each day
  var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  for (let i = 0; i < 7; i++) {
    doc.write(`
      <div class="day">
        <h2>${daysOfWeek[i]}</h2>
        <p><strong>Breakfast:</strong> ${breakfast}</p>
        <p><strong>Snack:</strong> ${snack1}</p>
        <p><strong>Lunch:</strong> ${lunch}</p>
        <p><strong>Snack:</strong> ${snack2}</p>
        <p><strong>Dinner:</strong> ${dinner}</p>
      </div>
    `);
  }

  doc.write(`
      </div>
      <button onclick="window.print()">Print</button>
      <button onclick="downloadMealPlan()">Download</button>
      <script>
        function downloadMealPlan() {
          var html = document.documentElement.outerHTML;
          var blob = new Blob([html], { type: 'text/html' });
          var url = URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = 'meal_plan.html';
          a.click();
          URL.revokeObjectURL(url);
        }
      </script>
    </body>
    </html>
  `);
  doc.close();
}

// Reset the form
function clearForm() {
  form.reset();
}
