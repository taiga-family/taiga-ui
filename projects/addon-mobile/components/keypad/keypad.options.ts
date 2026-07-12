import {tuiCreateOptions} from '@taiga-ui/cdk/utils/di';

export type TuiKeypadAction = 'backspace' | 'clear' | 'enter';

// eslint-disable-next-line
export type TuiKeypadKey = TuiKeypadAction | (string & {});

export type TuiKeypadCell = TuiKeypadKey | null;

export const TUI_DEFAULT_KEYPAD: ReadonlyArray<readonly TuiKeypadCell[]> = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    [',', '0', 'backspace'],
];

export interface TuiKeypadOptions {
    readonly keys: ReadonlyArray<readonly TuiKeypadCell[]>;
    readonly icons: Record<TuiKeypadAction, string>;
}

export const [TUI_KEYPAD_OPTIONS, tuiKeypadOptionsProvider] =
    tuiCreateOptions<TuiKeypadOptions>({
        keys: TUI_DEFAULT_KEYPAD,
        icons: {
            backspace: '@tui.delete',
            clear: 'AC',
            enter: '@tui.equal',
        },
    });
