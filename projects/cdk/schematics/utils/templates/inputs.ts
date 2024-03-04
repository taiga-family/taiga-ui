import {type Attribute} from 'parse5';

export function findAttr(attrs: Attribute[], name: string): Attribute | undefined {
    return attrs.find(attr => attr.name === name || attr.name === `[${name}]`);
}

export function isBinding(attr: Attribute): boolean {
    return attr.name.startsWith('[');
}
