function StudentGrade(input) {
    

        if (isNaN(input) || input < 0 || input > 100) {
           
            console.log("Invalid input. Please enter a number between 0 and 100.")
        } else {
        
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
    
    
            console.log(`Student Grade: ${grade}`);
        }
    }
    
    StudentGrade(78);