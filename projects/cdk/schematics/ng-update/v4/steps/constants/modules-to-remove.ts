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
        name: 'TuiOverscrollModule',
        moduleSpecifier: '@taiga-ui/cdk',
    },
];
