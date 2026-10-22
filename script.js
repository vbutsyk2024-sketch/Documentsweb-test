// ==========================================
// 1. ІМЕНОВАНА ФУНКЦІЯ (Function Declaration)
// ==========================================
function greet(name) {
  return `Привіт, ${name}!`;
}

console.log("--- 1. Named Function ---");
console.log(greet("Світлана"));


// ==========================================
// 2. ФУНКЦІОНАЛЬНИЙ ВИРАЗ (Function Expression)
// ==========================================
const multiply = function(a, b) {
  return a * b;
};

console.log("\n--- 2. Function Expression ---");
console.log("Результат множення (4 * 5):", multiply(4, 5));


// ==========================================
// 3. СТРІЛКОВА ФУНКЦІЯ (Arrow Function)
// ==========================================
const square = (x) => x * x;

console.log("\n--- 3. Arrow Function ---");
console.log("Квадрат числа 6:", square(6));


// ==========================================
// 4. ЗАМИКАННЯ (Closure)
// ==========================================
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log("\n--- 4. Closure (Замикання) ---");
console.log("Лічильник 1 виклик:", counter()); // 1
console.log("Лічильник 2 виклик:", counter()); // 2
console.log("Лічильник 3 виклик:", counter()); // 3


// ==========================================
// 5. КОЛБЕК-ФУНКЦІЯ (Callback)
// ==========================================
function processData(number, callback) {
  const result = number * 2;
  callback(result);
}

console.log("\n--- 5. Callback Function ---");
processData(10, function(output) {
  console.log("Оброблене значення з колбека:", output);
});