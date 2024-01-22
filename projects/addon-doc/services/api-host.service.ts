import {Inject, Injectable, OnDestroy, Optional, SkipSelf} from '@angular/core';
import {
    TuiDocumentationProperty,
    TuiDocumentationPropertyType,
} from '@taiga-ui/addon-doc/interfaces';
import {tuiRenderProperty} from '@taiga-ui/addon-doc/utils';
import {BehaviorSubject} from 'rxjs';

const indent = 4;

const maxInlinePropertiesLength = 40;

const typeRange: readonly TuiDocumentationPropertyType[] = [
    'input-output',
    'input',
    'output',
    null,
];

const enforceEmptyTags = ['input', 'img'];

const indentStr = ' '.repeat(indent);

class Contents implements ArrayLike<string> {
    [K: number]: string;

    length = 0;

    set(index: number, value: string): void {
        if (index >= this.length) {
            this.length = index + 1;
        }

        this[index] = value;
    }

    delete(index: number): void {
        delete this[index];

        while (!(this.length - 1 in this) && this.length > 0) {
            this.length--;
        }
    }

    join(separator: string, level: number): string {
        return Array.from(this)
            .filter(item => item)
            .map(item => item.replace(/\n/g, `\n${indentStr.repeat(level)}`))
            .join(separator);
    }
}

type DocumentationPropertyEntry = [string, TuiDocumentationProperty];

function transformProperties([
    name,
    property,
]: DocumentationPropertyEntry): DocumentationPropertyEntry {
    if (property.type === 'input' && property.value) {
        const match = /^'(.*)'$/.exec(property.value);

        if (match) {
            return [
                name,
                {
                    type: null,
                    value: match.at(1),
                },
            ];
        }
    }

    return [name, property];
}

function sortProperties(
    [aName, aProperty]: DocumentationPropertyEntry,
    [bName, bProperty]: DocumentationPropertyEntry,
): number {
    const aRange = typeRange.indexOf(aProperty.type);
    const bRange = typeRange.indexOf(bProperty.type);

    if (aRange !== bRange) {
        return aRange - bRange; // Sorting by range directly
    }

    // Sorting by value
    if (aProperty.value && !bProperty.value) {
        return -1;
    }

    if (!aProperty.value && bProperty.value) {
        return 1;
    }

    // Sorting by alphabet
    return aName.localeCompare(bName);
}

@Injectable()
export class TuiApiHostService implements OnDestroy {
    private tagName = '';

    private baseProperties: Record<string, TuiDocumentationProperty> = {};

    private properties: Record<string, TuiDocumentationProperty> = {};

    private readonly contents = new Contents();

    private readonly index = this.parent?.setContent('') ?? -1;

    readonly code$ = new BehaviorSubject<string>('');

    constructor(
        @Inject(TuiApiHostService)
        @Optional()
        @SkipSelf()
        private readonly parent: TuiApiHostService | null,
    ) {}

    setTemplate(
        tagName: string,
        baseProperties: Record<string, TuiDocumentationProperty>,
    ): void {
        this.tagName = tagName;
        this.baseProperties = baseProperties;
        this.onChange();
    }

    setProperty(name: string, property: TuiDocumentationProperty): void {
        this.properties[name] = property;
        this.onChange();
    }

    deleteProperty(name: string): void {
        delete this.properties[name];
        this.onChange();
    }

    setContent(content: string, index: number = this.contents.length): number {
        this.contents.set(index, content);
        this.onChange();

        return index;
    }

    deleteContent(index: number): void {
        this.contents.delete(index);
        this.onChange();
    }

    ngOnDestroy(): void {
        this.parent?.deleteContent(this.index);
    }

    private onChange(): void {
        const template = this.renderTemplate();

        this.code$.next(template);

        if (this.parent) {
            this.parent.setContent(template, this.index);
        }
    }

    private renderTemplate(): string {
        if (!this.tagName) {
            return this.contents.join('\n', 0);
        }

        const properties: Record<string, TuiDocumentationProperty> = {
            ...this.baseProperties,
            ...this.properties,
        };
        const renderedProperties = Object.entries(properties)
            .map(transformProperties)
            .sort(sortProperties)
            .map(([name, property]) => tuiRenderProperty(name, property))
            .filter(value => value);

        renderedProperties.unshift('');
        const renderedPropertiesStr =
            renderedProperties.join(' ').length > maxInlinePropertiesLength
                ? `${renderedProperties.join(`\n${indentStr}`)}\n`
                : renderedProperties.join(' ');

        const renderedContent = this.contents.join(`\n${indentStr}`, 1);

        if (enforceEmptyTags.includes(this.tagName)) {
            return `<${this.tagName}${renderedPropertiesStr}/>`;
        }

        return `<${this.tagName}${renderedPropertiesStr}>${
            renderedContent ? `\n${indentStr}${renderedContent}\n` : ''
        }</${this.tagName}>`;
    }
}
