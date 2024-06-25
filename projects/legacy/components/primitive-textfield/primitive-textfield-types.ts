import type {AbstractTuiInteractive} from '@taiga-ui/legacy/classes';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';

/**
 * @deprecated: drop in v5.0
 */
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
