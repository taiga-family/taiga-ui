interface ModuleToReplace {
    from: {name: string; moduleSpecifier: string};
    to: {name: string; providerSpecifier: string};
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
        },
    },
];
