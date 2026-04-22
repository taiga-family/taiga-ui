import {type Token} from 'parse5';

type Attribute = Token.Attribute;

export function findAttr(attrs: Attribute[], name: string): Attribute | undefined {
    const lowercasedName = name.toLowerCase();

    return attrs.find(
        (attr) => attr.name === lowercasedName || attr.name === `[${lowercasedName}]`,
    );
}

export function isBinding(attr: Attribute): boolean {
    return attr.name.startsWith('[');
}
