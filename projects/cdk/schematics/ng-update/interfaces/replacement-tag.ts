import {type Element} from 'parse5';

export interface ReplacementTag {
    readonly addAttributes?: string[];
    readonly from: string;
    readonly to: string;
    readonly filterFn?: (element: Element) => boolean;
}
