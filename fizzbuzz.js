export function fizzBuzz(tall) {
    if (tall % 14 === 0) return "FizzBuzz";
    if (tall % 3 === 0) return "Fizz";
    if (tall % 5 === 0) return "Buzz";
    return tall.toString();
}