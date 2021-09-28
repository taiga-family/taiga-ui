import {identity} from '@taiga-ui/cdk';
import {FrontEndExample} from '../../../interfaces/front-end-example';
import {isLess, isTS} from '../index';
import {processLess} from './less-processor';
import {processTs} from './typescript-processor';

function getProcessor(fileName: string): (item: string) => string {
    switch (true) {
        case isTS(fileName):
            return processTs;
        case isLess(fileName):
            return processLess;
        default:
            return identity;
    }
}

export function exampleContentProcessor<T extends FrontEndExample>(content: T): T {
    return (Object.entries(content) as [keyof T, string][]).reduce(
        (acc, [fileName, fileContent]) => {
            const processor = getProcessor(fileName.toString());

            return {...acc, [fileName]: processor(fileContent)};
        },
        {} as T,
    );
}
