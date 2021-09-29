import {FrontEndExample} from '../../interfaces/front-end-example';
import {TsFileComponentParser, TsFileModuleParser, TsFileParser} from '../classes';
import {isLess, isMainComponentFile, isTS} from '../utils';

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

export const getSupportFiles = <T extends FrontEndExample>(
    files: T,
): Array<[FileName, FileContent]> => {
    return Object.entries(files).filter(
        ([fileName, content]) => content && !isMainComponentFile(fileName),
    );
};

export const prepareSupportFiles = (
    files: Array<[FileName, FileContent]>,
): Record<FileName, FileContent> => {
    return files
        .map(([fileName, fileContent]) => [
            fileName,
            isLess(fileName) ? prepareLess(fileContent) : fileContent,
        ])
        .reduce(
            (acc, [fileName, fileContent]) => ({
                ...acc,
                [appPrefix`${fileName}`]: fileContent,
            }),
            {},
        );
};

export const getComponentsClassNames = (
    files: Array<[FileName, FileContent]>,
): Array<[FileName, FileContent]> => {
    return files
        .filter(
            ([fileName, fileContent]) =>
                isTS(fileName) && new TsFileParser(fileContent).isNgComponent,
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
        .filter(([name, content]) => isTS(name) && new TsFileParser(content).isNgModule)
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileModuleParser(fileContent),
        ]);
};
