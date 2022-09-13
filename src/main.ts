import Address from "./domain/customer/value-object/address";
import OrderItem from "./domain/checkout/entity/order_item";
import Customer from "./domain/customer/entity/customer";
import Order from "./domain/checkout/entity/order";

let customer = new Customer("123", "Paulo Celso");
const address = new Address("Rua dois", 2, "12345-678", "Sao Paulo");
customer.address = address;
customer.activate();

const item1 = new OrderItem("1", "item1", 10, "p1", 1);
const item2 = new OrderItem("2", "item2", 15, "p2", 1);
const order = new Order("1", "123", [item1, item2]);
