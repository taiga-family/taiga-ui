import type {RemovedModule} from '../../../interfaces';

export const MODULES_TO_REMOVE: RemovedModule[] = [
    {
        name: 'TuiPreventDefaultModule',
        moduleSpecifier: '@taiga-ui/cdk',
    },
    {
        name: 'TuiProgressSegmentedModule',
        moduleSpecifier: '@taiga-ui/experimental',
    },
    {
        name: 'TuiFocusableModule',
        moduleSpecifier: '@taiga-ui/cdk',
    },
    {
        name: 'TuiPromptDialogModule',
        moduleSpecifier: '@taiga-ui/proprietary-core',
    },
    {
        name: 'TuiThemeTinkoff2023NightModule',
        moduleSpecifier: '@taiga-ui/proprietary-core',
    },
    {
        name: 'TuiOverscrollModule',
        moduleSpecifier: '@taiga-ui/cdk',
    },
    {
        name: 'TuiThemeNightModule',
        moduleSpecifier: '@taiga-ui/core',
    },
    {
        name: 'TuiModeModule',
        moduleSpecifier: '@taiga-ui/core',
    },
];
