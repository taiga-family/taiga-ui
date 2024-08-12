import type {Project} from '@stackblitz/sdk';

import {isLess, isPrimaryComponentFile} from '../utils';

type FileName = string;

type FileContent = string;

export const prepareLess = (content: string): string =>
    content.replaceAll(
        /@import.+taiga-ui-local(.less)?';/g,
        "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
    );

export const appPrefix = (stringsPart: TemplateStringsArray, path = ''): string =>
    `src/app/${stringsPart.join('')}${path}`;

export const getSupportFiles = <T extends Record<string, string>>(
    files: T,
): Array<[FileName, FileContent]> =>
    Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );

export const prepareSupportFiles = (
    files: Array<[FileName, FileContent]>,
): Project['files'] => {
    const processedContent: Project['files'] = {};

    files.forEach(([fileName, fileContent]) => {
        const prefixedFileName = appPrefix`${fileName}`;

        processedContent[prefixedFileName] = isLess(fileName)
            ? prepareLess(fileContent)
            : fileContent;
    });

    return processedContent;
};
