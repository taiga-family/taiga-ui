import type {ReplacementIdentifier} from './replacement-identifier';

export interface ReplacementService extends ReplacementIdentifier {
    readonly replaceMethods?: ReadonlyArray<{
        from: string;
        to: string;
    }>;
}
