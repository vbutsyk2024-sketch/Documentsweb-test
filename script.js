// 1. БАЗОВИЙ КЛАС
class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  getInfo() {
    return `[ID: ${this.id}] ${this.title} — ${this.price} грн`;
  }
}

// 2. УСПАДКУВАННЯ (Електроніка)
class Electronics extends Product {
  constructor(id, title, price, warrantyMonths) {
    super(id, title, price);
    this.warrantyMonths = warrantyMonths;
  }

  getInfo() {
    return `${super.getInfo()} (Гарантія: ${this.warrantyMonths} міс.)`;
  }
}

// 3. УСПАДКУВАННЯ (Одяг)
class Clothing extends Product {
  constructor(id, title, price, size) {
    super(id, title, price);
    this.size = size;
  }

  getInfo() {
    return `${super.getInfo()} (Розмір: ${this.size})`;
  }
}

// 4. КЛАС КОШИКА
class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    this.items.push(product);
    console.log(`Товар "${product.title}" додано в кошик.`);
  }

  removeProduct(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    console.log(`Товар з ID ${productId} видалено.`);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  showCart() {
    console.log("\n--- Вміст кошика ---");
    if (this.items.length === 0) {
      console.log("Кошик порожній.");
    } else {
      this.items.forEach(item => console.log(item.getInfo()));
      console.log(`Загальна вартість: ${this.getTotalPrice()} грн`);
    }
    console.log("--------------------\n");
  }
}

// 5. КЛАС КОРИСТУВАЧА
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cart = new Cart();
  }

  checkout() {
    if (this.cart.items.length === 0) {
      console.log(`УВАГА: Кошик користувача ${this.name} порожній!`);
      return;
    }
    console.log(`\nЗамовлення користувача ${this.name} (${this.email}) оформлено!`);
    console.log(`До сплати: ${this.cart.getTotalPrice()} грн`);
    this.cart.items = []; // Очищення кошика після замовлення
  }
}

// === ДЕМОНСТРАЦІЯ РОБОТИ ===
console.log("=== ЗАПУСК СИСТЕМИ ОНЛАЙН-МАГАЗИНУ ===");

// Створення товарів
const phone = new Electronics(1, "Смартфон Samsung", 22000, 24);
const laptop = new Electronics(2, "Ноутбук ASUS", 38000, 12);
const shirt = new Clothing(3, "Сорочка", 1200, "L");

// Створення покупця
const buyer = new User(101, "Іван Петренко", "ivan@example.com");

// Операції з кошиком
buyer.cart.addProduct(phone);
buyer.cart.addProduct(laptop);
buyer.cart.addProduct(shirt);

buyer.cart.showCart();

// Видалення товару та перевірка
buyer.cart.removeProduct(2);
buyer.cart.showCart();

// Оформлення замовлення
buyer.checkout();
buyer.cart.showCart();