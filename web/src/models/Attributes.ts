import { UserProps } from "./User";

export class Attributes<T> {
    constructor(private data: T) {}

    // Key K extends keyof Type T
    // get takes parameter key of type K
    // function returns key of type T
    // thats name / age / id value (UserProps in this case)
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    } 

    getAll(): T {
        return this.data;
    }
}
