import Order from "../entity/order";
import RepositoyInterface from "./repository.interface";

export default interface OrderRepositoryInterface
  extends RepositoyInterface<Order> {}
