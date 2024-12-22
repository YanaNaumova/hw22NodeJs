import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

console.log(capitalize("hello"));
console.log(reverseString("hello"));

const lohnCalc = new Finance.LoanCalculator(1000, 5, 12);
console.log(lohnCalc.monthlyPaymentFunc());

const taxCalc = new Finance.TaxCalculator(10000, 10);
console.log(taxCalc.calculateIncomeTax());

const admin = new UserManagement.Admin.AdminUser(
  "Ivan",
  "example@gmail.com",
  false
);

admin.changesRules();
console.log(admin);

console.log(generateFibonacci(4));

console.log(generatePrimeNumbers(111));
