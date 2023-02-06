import {identity} from 'rxjs';

import {isLess, isTS} from '../file-type-guards.utils';
import {processLess} from './less-processor';
import {processTs} from './typescript-processor';

function getProcessor(fileName: string): (item: string) => string {
    if (isTS(fileName)) {
        return processTs;
    }

    if (isLess(fileName)) {
        return processLess;
    }

    return identity;
}

export function exampleContentProcessor<T extends Record<string, any>>(content: T): T {
    const processedContent: Record<string, string> = {};

    for (const [fileName, fileContent] of Object.entries(content)) {
        const processor = getProcessor(fileName);

        processedContent[fileName] = processor(fileContent);
    }

    return processedContent as T;
}
