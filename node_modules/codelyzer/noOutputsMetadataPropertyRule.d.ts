import { IOptions, IRuleMetadata } from 'tslint/lib';
import { MetadataPropertyBase } from './metadataPropertyBase';
export declare class Rule extends MetadataPropertyBase {
    static readonly metadata: IRuleMetadata;
    static readonly FAILURE_STRING: string;
    constructor(options: IOptions);
}
