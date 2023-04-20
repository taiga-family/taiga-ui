export interface ImportingModule {
    name: string;
    packageName: string;
}

export const MAIN_MODULE: ImportingModule = {
    name: `TuiRootModule`,
    packageName: `@taiga-ui/core`,
};

export const BROWSER_ANIMATION_MODULE = {
    name: `BrowserAnimationsModule`,
    packageName: `@angular/platform-browser/animations`,
};

export const DIALOG_MODULES: readonly ImportingModule[] = [
    {
        name: `TuiDialogModule`,
        packageName: `@taiga-ui/core`,
    },
];

export const ALERT_MODULES: readonly ImportingModule[] = [
    {
        name: `TuiAlertModule`,
        packageName: `@taiga-ui/core`,
    },
];

export const SANITIZER_MODULES: readonly ImportingModule[] = [
    {
        name: `TUI_SANITIZER`,
        packageName: `@taiga-ui/core`,
    },
    {
        name: `NgDompurifySanitizer`,
        packageName: `@tinkoff/ng-dompurify`,
    },
];
