import {type ReplacementIdentifier} from './replacement-identifier';

export interface ReplacementService extends ReplacementIdentifier {
    readonly replaceMethods?: Array<{
        from: string;
        to: string;
    }>;
}
