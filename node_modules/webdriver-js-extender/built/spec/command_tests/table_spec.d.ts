import { Session } from '../mock-server/interfaces';
export interface Testcase {
    skip?: boolean;
    args?: any[];
    result?: any;
    session?: Session;
    params?: {
        [name: string]: any;
    };
}
