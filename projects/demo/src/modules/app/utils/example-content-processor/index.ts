import {identity} from '@taiga-ui/cdk';

import {isLess, isTS} from '../index';
import {processLess} from './less-processor';
import {processTs} from './typescript-processor';

function getProcessor(fileName: string): (item: string) => string {
    if (isTS(fileName)) {
        return processTs;
    } else if (isLess(fileName)) {
        return processLess;
    } else {
        return identity;
    }
}

export function exampleContentProcessor<T extends object>(content: T): T {
    const processedContent: Record<string, string> = {};

    for (const [fileName, fileContent] of Object.entries(content)) {
        const processor = getProcessor(fileName);

        processedContent[fileName] = processor(fileContent);
    }

    return processedContent as T;
}
