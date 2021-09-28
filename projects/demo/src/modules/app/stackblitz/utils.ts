import {FrontEndExample} from '../../interfaces/front-end-example';
import {TsFileComponentParser} from '../classes';
import {isMainComponentFile, isTS} from '../utils';

export const prepareLess = (content: string): string => {
    return content.replace(
        '~@taiga-ui/core/styles/taiga-ui-local',
        '@taiga-ui/core/styles/taiga-ui-local.less',
    );
};

// TODO refactor using Object.fromEntries when es2019 or later
const fromEntries = <T>(entries: Array<[string, T]>): Record<string, T> => {
    return entries.reduce(
        (acc, [fileName, fileContent]) => ({
            ...acc,
            [fileName]: fileContent,
        }),
        {},
    );
};

export const getSupportFiles = <T extends FrontEndExample>(
    files: T,
): Record<string, string> => {
    return fromEntries(
        Object.entries(files).filter(([fileName]) => !isMainComponentFile(fileName)),
    );
};

export const getComponentsClassNames = (
    files: Record<string, string>,
): Array<[string, string]> => {
    return Object.entries(files)
        .filter(([fileName]) => isTS(fileName))
        .map(([fileName, fileContent]) => [
            fileName,
            new TsFileComponentParser(fileContent).className,
        ]);
};
