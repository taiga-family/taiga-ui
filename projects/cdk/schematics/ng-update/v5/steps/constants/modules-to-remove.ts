import {type RemovedModule} from '../../../interfaces';

export const MODULES_TO_REMOVE: RemovedModule[] = [
    {
        name: 'TuiRepeatTimesPipe',
        moduleSpecifier: '@taiga-ui/cdk',
    },
    {
        name: 'TuiTextfieldControllerModule',
        moduleSpecifier: '@taiga-ui/legacy',
    },
    {
        name: 'TuiIconBadge',
        moduleSpecifier: '@taiga-ui/kit',
    },
    {
        name: 'TuiFallbackSrcPipe',
        moduleSpecifier: '@taiga-ui/core',
    },
    {
        name: 'TuiTimelineSteps',
        moduleSpecifier: '@taiga-ui/proprietary',
    },
    {
        name: 'tuiProvideExperimentalHint',
        moduleSpecifier: '@taiga-ui/experimental',
    },
    {
        name: 'TuiTextareaLimit',
        moduleSpecifier: '@taiga-ui/kit',
    },
];
