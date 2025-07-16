import {Injectable} from '@angular/core';

export interface TuiApiItemConfig {
    name: string;
    type: string;
    value: unknown;
}

@Injectable({
    providedIn: 'root',
})
export class TuiCodeGeneratorService {
    public generateComponentCode(
        selector: string,
        apiItems: TuiApiItemConfig[],
        content?: string,
    ): string {
        const attributes = this.generateAttributes(apiItems);
        const contentText = content ? `\n    ${content}\n` : '';

        return `<${selector}${attributes}>${contentText}</${selector}>`;
    }

    private generateAttributes(apiItems: TuiApiItemConfig[]): string {
        const attributes = apiItems
            .filter(item => this.shouldIncludeProperty(item))
            .map(item => this.formatAttribute(item))
            .filter(Boolean);

        if (attributes.length === 0) {
            return '';
        }

        return `\n    ${attributes.join('\n    ')}\n`;
    }

    private shouldIncludeProperty(item: TuiApiItemConfig): boolean {
        const {name, value, type} = item;
        
        // Skip if no value is set
        if (value === null || value === undefined) {
            return false;
        }

        // Skip boolean properties that are false (default)
        if (type === 'boolean' && value === false) {
            return false;
        }

        // Skip empty strings
        if (type === 'string' && value === '') {
            return false;
        }

        // Skip properties that start with these patterns (they're usually complex objects)
        if (name.startsWith('(') || name.includes('tuiAppearance')) {
            return false;
        }

        return true;
    }

    private formatAttribute(item: TuiApiItemConfig): string {
        const {name, value, type} = item;
        const cleanName = this.cleanPropertyName(name);

        // Boolean properties
        if (type === 'boolean') {
            return value ? cleanName : `[${cleanName}]="false"`;
        }

        // String properties
        if (type === 'string') {
            return `${cleanName}="${value}"`;
        }

        // Number properties and others
        if (typeof value === 'number' || type === 'number') {
            return `[${cleanName}]="${value}"`;
        }

        // Complex properties (arrays, objects, etc.)
        if (typeof value === 'object' || Array.isArray(value)) {
            return `[${cleanName}]="${this.stringifyValue(value)}"`;
        }

        // Default case
        return `[${cleanName}]="${value}"`;
    }

    private cleanPropertyName(name: string): string {
        // Remove brackets and parentheses
        return name.replace(/[\[\]()]/g, '');
    }

    private stringifyValue(value: unknown): string {
        if (typeof value === 'string') {
            return `'${value}'`;
        }
        
        return JSON.stringify(value);
    }
}