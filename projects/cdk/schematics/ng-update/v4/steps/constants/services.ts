import type {ReplacementService} from '../../../interfaces';

export const SERVICES_TO_REPLACE: ReplacementService[] = [
    {
        from: {name: 'TuiDialogFormService', moduleSpecifier: '@taiga-ui/kit'},
        to: {name: 'TuiConfirmService', moduleSpecifier: '@taiga-ui/kit'},
        replaceMethods: [
            {
                from: 'withPrompt',
                to: 'withConfirm',
            },
        ],
    },
];
