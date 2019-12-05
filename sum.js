// creates a variable to hold the sum of prime numbers from 1 - 100.
  let sum = 0;

// for loop logs all the natural numbers from 1-100
for (let number = 0; number <= 100; number++) {

// creates a boolean value set to false used to check if a number is a prime number.
   let notPrime = false;

// nested for loop checks if a number if a prime number against a conditional if statement based on the boolean above.
    for (let i = 2; i <= number; i++) {
        if (number%i === 0 && i !== number) {
            notPrime = true;  
        }
    }

// if statement saves the sums of all prime numbers to the variable 'sum' and logs it in the console.
    if ( notPrime === false) {
        sum += number;
        console.log(sum);
    }
}

