export function generateFibonacci(num: number): number {
  if (num <= 1) {
    return num;
  }
  return generateFibonacci(num - 1) + generateFibonacci(num - 2);
}

export function generatePrimeNumbers(num: number): number[] {
  let primes: number[] = [];

  for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}
