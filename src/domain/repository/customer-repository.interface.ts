import Customer from "../entity/customer";
import RepositoyInterface from "./repository.interface";

export default interface CustomerRepositoryInterface extends RepositoyInterface<Customer> {}