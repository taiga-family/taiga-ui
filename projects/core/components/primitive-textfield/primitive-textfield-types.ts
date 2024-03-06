import type {AbstractTuiInteractive, TuiFocusableElementAccessor} from '@taiga-ui/cdk';

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
