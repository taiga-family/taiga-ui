import {type Project} from '@stackblitz/sdk';

import {isLess, isPrimaryComponentFile} from '../utils';

export const prepareLess = (content: string): string =>
    content.replaceAll(
        /@import.+@taiga-ui\/styles\/utils(?:.less)?';/g,
        "@import '@taiga-ui/styles/utils.less';",
    );

export const appPrefix = (stringsPart: TemplateStringsArray, path = ''): string =>
    `src/app/${stringsPart.join('')}${path}`;

export const getSupportFiles = <T extends Record<string, string>>(
    files: T,
): Array<[fileName: string, fileContent: string]> =>
    Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );

export const prepareSupportFiles = (
    files: Array<[fileName: string, fileContent: string]>,
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
