import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

    customer: Array<Customer> = [];

    constructor() {
        const customer = new Customer();
        customer.nome = 'fabio';
        customer.sobrenome = 'parize';
        customer.cpf = '9999999999';
        customer.rg = '999999999';
        customer.telefone = '99999999';
        customer.idade = '21';
        customer.genero = 'Masculino';
        customer.email = 'teste@teste';
        customer.endereco = 'teste';
        customer.etnia = 'parda';

        this.customer.push(customer);
    }

    findAll() {
        return this.customer;
    }

    save(Customer: Customer) {
        this.customer.push(Customer);
    }

}