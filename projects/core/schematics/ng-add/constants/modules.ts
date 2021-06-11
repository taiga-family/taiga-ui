export interface ImportingModule {
    name: string;
    packageName: string;
}

export const MAIN_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'TuiRootModule',
        packageName: '@taiga-ui/core',
    },
    {
        name: 'BrowserAnimationsModule',
        packageName: '@angular/platform-browser/animations',
    },
];

export const DIALOG_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'TuiDialogModule',
        packageName: '@taiga-ui/core',
    },
];

export const NOTIFICATION_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'TuiNotificationsModule',
        packageName: '@taiga-ui/core',
    },
];
