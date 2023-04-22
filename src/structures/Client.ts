import { ClientOptions } from "../interfaces/ClientOptions";
import BaseClient from "./BaseClient";

export default class Client extends BaseClient {
    constructor(options: ClientOptions) {
        super(options);
    }
}