export interface TuiDocApiItemConfig {
    name: string;
    type: string;
    value: unknown;
}

export function tuiGenerateApiCode(
    tag: string,
    items: readonly TuiDocApiItemConfig[],
    content = '',
    staticAttributes = '',
): string {
    const attributes = items
        .filter((item) => shouldIncludeApiItem(item))
        .map((item) => formatApiAttribute(item))
        .filter(Boolean);

    const staticPart = staticAttributes.trim();
    const dynamicPart = attributes.length ? `\n    ${attributes.join('\n    ')}` : '';
    const prefix = staticPart ? `\n    ${staticPart}` : '';
    const inner = content ? `\n    ${content}\n` : '';

    return `<${tag}${prefix}${dynamicPart}\n>${inner}</${tag}>`;
}

function shouldIncludeApiItem({name, value, type}: TuiDocApiItemConfig): boolean {
    if (name.startsWith('(')) {
        return false;
    }

    if (value === null || value === undefined) {
        return false;
    }

    if (type === 'boolean' && value === false) {
        return false;
    }

    if (type === 'string' && value === '') {
        return false;
    }

    return true;
}

function formatApiAttribute({name, value, type}: TuiDocApiItemConfig): string {
    const property = name.replace(/[[\]()]/g, '');
    const isInput = name.startsWith('[');

    if (type === 'boolean') {
        return `[${property}]="${Boolean(value)}"`;
    }

    if (typeof value === 'string') {
        const expression = `'${escapeAngularStringLiteral(value)}'`;

        return isInput
            ? `[${property}]="${escapeHtmlAttribute(expression)}"`
            : `${property}="${escapeHtmlAttribute(value)}"`;
    }

    if (typeof value === 'number' || type === 'number') {
        return `[${property}]="${value}"`;
    }

    if (typeof value === 'bigint') {
        return `[${property}]="${String(value)}n"`;
    }

    if (typeof value === 'object' && value !== null) {
        const json = stringifyApiValue(value);

        return `[${property}]='${escapeSingleQuotedAttribute(json)}'`;
    }

    return `[${property}]="${value}"`;
}

function escapeAngularStringLiteral(value: string): string {
    return value.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
}

function escapeHtmlAttribute(value: string): string {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll('<', '&lt;');
}

function escapeSingleQuotedAttribute(value: string): string {
    return value.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
}

function stringifyApiValue(value: object): string {
    return JSON.stringify(value, (_, item) =>
        typeof item === 'bigint' ? `${String(item)}n` : item,
    );
}
