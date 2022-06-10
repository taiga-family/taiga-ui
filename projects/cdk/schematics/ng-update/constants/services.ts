import {ReplacementConst} from './consts';

export interface ReplacementService extends ReplacementConst {
    readonly replaceMethods?: {
        from: string;
        to: string;
    }[];
}

export const SERVICES_TO_REPLACE: ReplacementService[] = [
    {
        from: {
            name: 'TuiPortalService',
        },
        to: {
            name: 'TuiDropdownPortalService',
            moduleSpecifier: '@taiga-ui/cdk',
        },
    },
    {
        from: {
            name: 'TuiNotificationsService',
        },
        to: {
            name: 'TuiAlertService',
            moduleSpecifier: '@taiga-ui/cdk',
        },
        replaceMethods: [
            {
                from: 'show',
                to: 'open',
            },
        ],
    },
    {
        from: {
            name: 'TuiCodeEditor',
        },
        to: {
            name: 'TuiCodeEditor',
            moduleSpecifier: '@taiga-ui/addon-doc',
        },
        replaceMethods: [
            {
                from: 'open',
                to: 'edit',
            },
        ],
    },
];
