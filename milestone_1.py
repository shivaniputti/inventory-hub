# milestone 1 - Simple Smart Inventory System

class Product:
    def __init__(self, name, price, stock):
        self.name = name
        self.price = price
        self.stock = stock

    def show(self):
        print(f"Name: {self.name}, Price: ₹{self.price}, Stock: {self.stock}")
        if self.stock < 5:
            print("Low stock! Please restock.")


products = []

while True:
    print("\n--- MENU ---")
    print("1. Add Product")
    print("2. View Products")
    print("3. Exit")

    choice = input("Enter choice: ")

    if choice == "1":
        name = input("Enter product name: ")
        price = float(input("Enter price: "))
        stock = int(input("Enter stock: "))
        p = Product(name, price, stock)
        products.append(p)
        print("Product added!")

    elif choice == "2":
        if not products:
            print("No products yet.")
        else:
            for p in products:
                p.show()

    elif choice == "3":
        print("Exiting...")
        break

    else:
        print("Invalid choice!")
