import {Project} from '@playwright/test';

export function tuiPlaywrightMergeUseConfig(
    options: Project['use'],
    custom: Partial<Project['use']>,
): Project['use'] {
    return {...options, ...custom};
}
