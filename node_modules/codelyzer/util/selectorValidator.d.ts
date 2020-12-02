import { SelectorStyle } from '../selectorPropertyBase';
export declare const SelectorValidator: {
    attribute(selector: string): boolean;
    camelCase(selector: string): boolean;
    element(selector: string): boolean;
    kebabCase(selector: string): boolean;
    prefix(prefix: string, selectorStyle: SelectorStyle): (selector: string) => boolean;
};
