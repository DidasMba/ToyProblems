// Function to calculate PAYE (Tax) based on the provided taxable income
function calculatePAYE(taxableIncome) {
    // Use the KRA tax rates from the provided link
    // You can update these rates if they change in the future
    const taxRates = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 40417, rate: 0.3 },
        { min: 40418, max: 48417, rate: 0.32 },
        { min: 48418, max: 57083, rate: 0.34 },
        { min: 57084, max: 65833, rate: 0.36 },
        { min: 65834, max: 74333, rate: 0.38 },
        { min: 74334, max: 82500, rate: 0.4 },
        { min: 82501, max: Infinity, rate: 0.45 },
    ];

    let taxAmount = 0;
    for (const rate of taxRates) {
        if (taxableIncome >= rate.min) {
            const taxableAmount = Math.min(rate.max, taxableIncome) - rate.min;
            taxAmount += taxableAmount * rate.rate;
        } else {
            break;
        }
    }

    return taxAmount;
}

// Function to calculate NHIF deductions based on the provided gross salary
function calculateNHIF(grossSalary) {
    // Use the NHIF values from the provided link
    // You can update these values if they change in the future
    const nhifRates = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 950 },
        { min: 40000, max: 44999, amount: 1000 },
        { min: 45000, max: 49999, amount: 1100 },
        { min: 50000, max: Infinity, amount: 1300 },
    ];

    let nhifDeduction = 0;
    for (const rate of nhifRates) {
        if (grossSalary >= rate.min) {
            nhifDeduction = rate.amount;
        } else {
            break;
        }
    }

    return nhifDeduction;
}

// Function to calculate NSSF deductions based on the provided gross salary
function calculateNSSF(grossSalary) {
    // Use the NSSF values from the provided link
    // You can update these values if they change in the future
    const nssfRate = 0.06; // NSSF contribution rate

    const nssfDeduction = grossSalary * nssfRate;
    return nssfDeduction;
}

// Function to calculate the net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const taxAmount = calculatePAYE(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);

    const netSalary = grossSalary - taxAmount - nhifDeduction - nssfDeduction;
    return netSalary;
}

// Example usage:
const basicSalary = 50000; // Replace with the actual basic salary
const benefits = 10000;   // Replace with the actual benefits

const netSalary = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary: KES", netSalary);
