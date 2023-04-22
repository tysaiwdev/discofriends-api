import { ClientOptions } from "../interfaces/ClientOptions";

export default class BaseClient {
    options: ClientOptions
    constructor(options: ClientOptions) {
        this.options = options
    }
}