import {AbstractTuiInteractive, TuiFocusableElementAccessor} from '@taiga-ui/cdk';

export type TuiPrimitiveTextfield = AbstractTuiInteractive &
    TuiFocusableElementAccessor & {
        nativeFocusableElement: HTMLInputElement | null;
        readOnly: boolean;
        appearance: string;
        value: string;
        prefix: string;
        postfix: string;
        filler: string;
    };
