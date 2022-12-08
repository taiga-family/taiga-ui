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
        to: {
            name: `TuiAlertService`,
            moduleSpecifier: `@taiga-ui/core`,
        },
        replaceMethods: [
            {
                from: `show`,
                to: `open`,
            },
        ],
    },
    {
        from: {
            name: `TuiCodeEditor`,
        },
        to: {
            name: `TuiCodeEditor`,
            moduleSpecifier: `@taiga-ui/addon-doc`,
        },
        replaceMethods: [
            {
                from: `open`,
                to: `edit`,
            },
        ],
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
