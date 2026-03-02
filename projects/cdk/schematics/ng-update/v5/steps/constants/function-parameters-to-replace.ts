import {type ReplacementFunctionParameter} from '../../../interfaces/replacement-function-parameter';

export const FUNCTION_PARAMETERS_TO_REPLACE: ReplacementFunctionParameter[] = [
    {
        names: ['tuiAmountOptionsProvider'],
        parameterName: 'currencyAlign',
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        names: ['tuiDropdownOptionsProvider'],
        parameterName: 'align',
        valueReplacer: [
            {from: 'left', to: 'start'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        names: ['tuiHintOptionsProvider'],
        parameterName: 'direction',
        valueReplacer: [
            {from: 'bottom-left', to: 'bottom-start'},
            {from: 'bottom-right', to: 'bottom-end'},
            {from: 'top-left', to: 'top-start'},
            {from: 'top-right', to: 'top-end'},
            {from: 'left-bottom', to: 'start-bottom'},
            {from: 'left-top', to: 'start-top'},
            {from: 'left', to: 'start'},
            {from: 'right-bottom', to: 'end-bottom'},
            {from: 'right-top', to: 'end-top'},
            {from: 'right', to: 'end'},
        ],
    },
    {
        names: [
            'tuiDialogOptionsProvider',
            'tuiSheetDialogOptionsProvider',
            'tuiAlertOptionsProvider',
            'tuiNotificationOptionsProvider',
        ],
        parameterName: 'closeable',
        newParameterName: 'closable',
    },
];
