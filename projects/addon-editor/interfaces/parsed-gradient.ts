import type {TuiGradientDirection} from '@taiga-ui/addon-editor/types';

export interface TuiParsedGradient {
    readonly stops: ReadonlyArray<{
        readonly color: string;
        readonly position: string;
    }>;
    readonly side: TuiGradientDirection;
}
