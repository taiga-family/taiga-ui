import { IRuleMetadata } from 'tslint/lib';
import { SelectorPropertyBase, SelectorStyle, SelectorType } from './selectorPropertyBase';
export declare class Rule extends SelectorPropertyBase {
    static readonly metadata: IRuleMetadata;
    handleType: string;
    getPrefixFailure(prefixes: ReadonlyArray<string>): string;
    getStyleFailure(style: SelectorStyle): string;
    getTypeFailure(types: ReadonlyArray<SelectorType>): string;
    isEnabled(): boolean;
}
