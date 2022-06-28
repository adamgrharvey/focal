let args = process.argv;
args = args.slice(2);

const sum = function(number1, number2) {
  return ((number1 - 0) + (number2 - 0));
};

console.log(sum(args[0], args[1]));