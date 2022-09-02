import type {Project} from '@stackblitz/sdk/typings/interfaces';

import {TsFileComponentParser, TsFileModuleParser, TsFileParser} from '../classes';
import {isLess, isPrimaryComponentFile, isTS} from '../utils';

export const prepareLess = (content: string): string => {
    return content
        .replace(
            `~@taiga-ui/core/styles/taiga-ui-local`,
            `styles/taiga-ui-stackblitz.less`,
        )
        .replace(/@import.+taiga-ui-local';/g, ``);
};

export const appPrefix = (stringsPart: TemplateStringsArray, path: string = ``): string =>
    `src/app/${stringsPart.join(``)}${path}`;

type FileName = string;

type FileContent = string;

export const getSupportFiles = <T extends Record<string, string>>(
    files: T,
): Array<[FileName, FileContent]> => {
    return Object.entries(files).filter(
        ([fileName, content]) => content && !isPrimaryComponentFile(fileName),
    );
};

export const prepareSupportFiles = (
    files: Array<[FileName, FileContent]>,
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
    files: Array<[FileName, FileContent]>,
): Array<[FileName, FileContent]> => {
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
    files: Array<[FileName, FileContent]>,
): Array<[FileName, TsFileModuleParser]> => {
    return files
        .filter(([name, content]) => isTS(name) && new TsFileParser(content).hasNgModule)
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileModuleParser(fileContent),
        ]);
};
