import {Attribute} from 'parse5';

export function findAttr(attrs: Attribute[], name: string): Attribute | undefined {
    return attrs.find(attr => attr.name === name || attr.name === `[${name}]`);
}
