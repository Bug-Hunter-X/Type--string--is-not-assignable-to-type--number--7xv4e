# Type 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript: assigning a string to a variable that's declared as a number.  The error occurs when the type checker enforces type safety, ensuring that variables are used consistently with their declared types.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` and you will see an error during compilation.
3. Run the `bugSolution.ts` file to see how the bug is solved.  The solution involves carefully checking the type of variables before performing operations.