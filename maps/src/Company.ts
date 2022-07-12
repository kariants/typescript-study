import faker from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }
    color: string = "blue";

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent() {
        return `
        <div>
        <h1>Company name: ${this.catchPhrase}</h1>
        <h3>Company catchphrase: ${this.catchPhrase}</h3>
        </div>
        `;
    }
}