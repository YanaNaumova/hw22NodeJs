export namespace Finance {
  export class LoanCalculator {
    loanAmount: number;
    monthlyRate: number;
    months: number;
    constructor(loanAmount: number, monthlyRate: number, months: number) {
      this.loanAmount = loanAmount;
      this.monthlyRate = monthlyRate;
      this.months = months;
    }

    monthlyPaymentFunc(): number {
      const monthlyPayment = Math.ceil(
        (this.loanAmount *
          ((this.monthlyRate / 100) *
            Math.pow(1 + this.monthlyRate / 100, this.months))) /
          (Math.pow(1 + this.monthlyRate / 100, this.months) - 1)
      );
      return monthlyPayment;
    }
  }

  export class TaxCalculator {
    income: number;
    tax: number;
    constructor(income: number, tax: number) {
      this.income = income;
      this.tax = tax;
    }

    calculateIncomeTax(): number {
      return (this.income * this.tax) / 100;
    }
  }
}
