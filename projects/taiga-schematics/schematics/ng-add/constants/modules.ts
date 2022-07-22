export interface ImportingModule {
    name: string;
    packageName: string;
}

export const MAIN_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'BrowserAnimationsModule',
        packageName: '@angular/platform-browser/animations',
    },
    {
        name: 'TuiRootModule',
        packageName: '@taiga-ui/core',
    },
];

export const DIALOG_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'TuiDialogModule',
        packageName: '@taiga-ui/core',
    },
];

export const ALERT_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'TuiAlertModule',
        packageName: '@taiga-ui/core',
    },
];

export const SANITIZER_MODULES: ReadonlyArray<ImportingModule> = [
    {
        name: 'TUI_SANITIZER',
        packageName: '@taiga-ui/core',
    },
    {
        name: 'NgDompurifySanitizer',
        packageName: '@tinkoff/ng-dompurify',
    },
];
