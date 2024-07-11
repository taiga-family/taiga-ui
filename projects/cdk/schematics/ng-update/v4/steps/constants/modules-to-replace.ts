export interface ProviderToReplace {
    name: string;
    providerSpecifier: string;
    isFunction?: boolean;
}

export interface ModuleToReplace {
    from: {name: string; moduleSpecifier: string};
    to: ProviderToReplace | ProviderToReplace[];
}

export const MODULES_TO_REPLACE_WITH_PROVIDERS: ModuleToReplace[] = [
    {
        from: {
            name: 'TuiMobileCalendarDialogModule',
            moduleSpecifier: '@taiga-ui/addon-mobile',
        },
        to: {
            name: 'tuiProvideMobileCalendar',
            providerSpecifier: '@taiga-ui/addon-mobile',
            isFunction: true,
        },
    },
];
