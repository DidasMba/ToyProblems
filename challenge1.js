function StudentGrade(input) {
    
        // THis code , Check if the input is a valid number within the specified range
        if (isNaN(input) || input < 0 || input > 100) {
            //alert("Invalid input. Please enter a number between 0 and 100.");
            console.log("Invalid input. Please enter a number between 0 and 100.")
        } else {
            // Determine the grade based on the input
            let grade;
            if (input > 79) {
                grade = "A";
            } else if (input >= 60 && input <= 79) {
                grade = "B";
            } else if (input >= 50 && input <= 59) {
                grade = "C";
            } else if (input >= 40 && input <= 49) {
                grade = "D";
            } else {
                grade = "E";
            }
    
            // Show the result
            console.log(`Student Grade: ${grade}`);
        }
    }
    
    // Call the function to start the grading process
    StudentGrade(78);