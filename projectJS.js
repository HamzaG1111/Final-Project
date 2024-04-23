function generateMealPlan() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var goal = document.getElementById('goal').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    var breakfast = document.getElementById('breakfast').value;
    var snack1 = document.getElementById('snack1').value;
    var lunch = document.getElementById('lunch').value;
    var snack2 = document.getElementById('snack2').value;
    var dinner = document.getElementById('dinner').value;

    var mealPlanHTML = 
}