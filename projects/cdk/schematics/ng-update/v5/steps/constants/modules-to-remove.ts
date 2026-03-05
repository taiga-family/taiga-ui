import {type RemovedModule} from '../../../interfaces';

export const MODULES_TO_REMOVE: RemovedModule[] = [
    {
        name: 'TuiRepeatTimesPipe',
        moduleSpecifier: '@taiga-ui/cdk',
    },
    {
        name: 'TuiIconBadge',
        moduleSpecifier: '@taiga-ui/kit',
    },
    {
        name: 'TUI_SLIDER_OPTIONS',
        moduleSpecifier: '@taiga-ui/kit',
    },
    {
        name: 'TuiTimelineSteps',
        moduleSpecifier: '@taiga-ui/proprietary',
    },
    {
        name: 'tuiProvideExperimentalHint',
        moduleSpecifier: '@taiga-ui/experimental',
    },
];
