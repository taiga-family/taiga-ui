import {ReplacementConst} from './replacement-const';

export interface ReplacementService extends ReplacementConst {
    readonly replaceMethods?: Array<{
        from: string;
        to: string;
    }>;
}
