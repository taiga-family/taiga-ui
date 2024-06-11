import type {TuiFocusableElementAccessor} from '@taiga-ui/cdk';
import type {AbstractTuiInteractive} from '@taiga-ui/legacy/classes';

export type TuiPrimitiveTextfield = AbstractTuiInteractive &
    TuiFocusableElementAccessor & {
        appearance: string;
        filler: string;
        nativeFocusableElement: HTMLInputElement | null;
        postfix: string;
        prefix: string;
        readOnly: boolean;
        value: string;
    };
