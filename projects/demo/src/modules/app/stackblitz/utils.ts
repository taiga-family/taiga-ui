import {Project} from '@stackblitz/sdk/typings/interfaces';

import {TsFileComponentParser, TsFileModuleParser, TsFileParser} from '../classes';
import {isLess, isPrimaryComponentFile, isTS} from '../utils';

export const prepareLess = (content: string): string => {
    return content.replace(
        '~@taiga-ui/core/styles/taiga-ui-local',
        '@taiga-ui/core/styles/taiga-ui-local.less',
    );
};

export const appPrefix = (stringsPart: TemplateStringsArray, path: string = '') =>
    `src/app/${stringsPart.join('')}${path}`;

type FileName = string;

type FileContent = string;

export const getSupportFiles = <T extends Record<string, string>>(
    files: T,
): [FileName, FileContent][] => {
    return Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );
};

export const prepareSupportFiles = (
    files: [FileName, FileContent][],
): Project['files'] => {
    const processedContent: Project['files'] = {};

    for (const [fileName, fileContent] of files) {
        const prefixedFileName = appPrefix`${fileName}`;

        processedContent[prefixedFileName] = isLess(fileName)
            ? prepareLess(fileContent)
            : fileContent;
    }

    return processedContent;
};

export const getComponentsClassNames = (
    files: [FileName, FileContent][],
): [FileName, FileContent][] => {
    return files
        .filter(
            ([fileName, fileContent]) =>
                isTS(fileName) && new TsFileParser(fileContent).hasNgComponent,
        )
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileComponentParser(fileContent).className,
        ]);
};

export const getSupportModules = (
    files: [FileName, FileContent][],
): [FileName, TsFileModuleParser][] => {
    return files
        .filter(([name, content]) => isTS(name) && new TsFileParser(content).hasNgModule)
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileModuleParser(fileContent),
        ]);
};
