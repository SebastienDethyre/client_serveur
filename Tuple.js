export class Tuple {
    #first_name
    #last_name
    #email
    #gender
    #ip_adress

    constructor(first_name, last_name, email, gender, ip_adress) { 
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.#email = email;
        this.#gender = gender;
        this.#ip_adress = ip_adress;
    }

    get_firstname() {
        return this.#first_name;
    }

    get_last_name() {
        return this.#last_name;
    }
    
    get_email() {
        return this.#email;
    }

    
    get_gender() {
        return this.#gender;
    }

    
    get_ip_adress() {
        return this.#ip_adress;
    }
}