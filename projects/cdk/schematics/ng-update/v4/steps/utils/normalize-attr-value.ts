export function normalizeAttrValue(attrName: string, attrValue: string): string {
    return attrName.startsWith('[') ? attrValue : `'${attrValue}'`;
}
