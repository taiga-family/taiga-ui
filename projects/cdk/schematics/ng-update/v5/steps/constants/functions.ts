import {type ReplacementType} from '../../../interfaces/replacement-type';

export const REPLACE_FUNCTIONS: readonly ReplacementType[] = [
    {
        from: 'tuiIsNativeFocused',
        to: 'tuiIsFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'tuiIsNativeFocusedIn',
        to: 'tuiIsFocusedIn',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'tuiGetNativeFocused',
        to: 'tuiGetFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'tuiIsNativeMouseFocusable',
        to: 'tuiIsMouseFocusable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'tuiIsNativeKeyboardFocusable',
        to: 'tuiIsKeyboardFocusable',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
    {
        from: 'tuiBlurNativeFocused',
        to: 'tuiBlurFocused',
        moduleSpecifier: ['@taiga-ui/cdk'],
    },
];
