function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const rad = readLine();
  const pi = 3.141592653589793238;
  // Print the area of the circle:
  console.log(pi * rad * rad);
  // Print the perimeter of the circle:
  console.log(pi * 2 * rad);
  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}
