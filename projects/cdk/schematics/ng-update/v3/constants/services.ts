import {ReplacementService} from '../../interfaces/replacement-service';

export const SERVICES_TO_REPLACE: ReplacementService[] = [
    {
        from: {
            name: `TuiPortalService`,
        },
        to: {
            name: `TuiDropdownPortalService`,
            moduleSpecifier: `@taiga-ui/cdk`,
        },
    },
    {
        from: {
            name: `TuiNotificationsService`,
        },
        replaceMethods: [
            {
                from: `show`,
                to: `open`,
            },
        ],
        to: {
            name: `TuiAlertService`,
            moduleSpecifier: `@taiga-ui/core`,
        },
    },
    {
        from: {
            name: `TuiCodeEditor`,
        },
        replaceMethods: [
            {
                from: `open`,
                to: `edit`,
            },
        ],
        to: {
            name: `TuiCodeEditor`,
            moduleSpecifier: `@taiga-ui/addon-doc`,
        },
    },
    {
        from: {
            name: `PreviewDialogService`,
        },
        to: {
            name: `TuiPreviewDialogService`,
            moduleSpecifier: `@taiga-ui/addon-preview`,
        },
    },
];
