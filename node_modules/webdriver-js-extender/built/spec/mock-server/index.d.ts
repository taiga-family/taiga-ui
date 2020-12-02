import { Session } from './interfaces';
import { Server } from 'selenium-mock';
export declare class MockAppium extends Server<Session> {
    constructor(port: number);
}
