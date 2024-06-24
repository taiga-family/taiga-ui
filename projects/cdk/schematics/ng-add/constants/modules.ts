export interface ImportingModule {
    name: string;
    packageName: string;
}

export const MAIN_MODULE: ImportingModule = {
    name: 'TuiRoot',
    packageName: '@taiga-ui/core',
};

export const BROWSER_ANIMATION_MODULE = {
    name: 'BrowserAnimationsModule',
    packageName: '@angular/platform-browser/animations',
};
