import {
    EventEmitter,
    Inject,
    Injectable,
    OnDestroy,
    Optional,
    SkipSelf,
} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';
import {
    TuiDocumentationProperty,
    TuiDocumentationPropertyType,
    tuiGetAttrName,
    tuiGetAttrValue,
} from '@taiga-ui/addon-doc';
import {TuiAlertService} from '@taiga-ui/core';
import {distinctUntilChanged, map} from 'rxjs/operators';

const indent = 4;

const maxInlinePropertiesLength = 40;

const typeRange: readonly TuiDocumentationPropertyType[] = [
    `input-output`,
    `input`,
    `output`,
    null,
];

const enforceEmptyTags = [`input`];

const indentStr = ` `.repeat(indent);

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

        while (this.length - 1 in this) {
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

@Injectable()
export class TuiApiHostService implements OnDestroy {
    #tagName = ``;

    #baseProperties: Record<string, TuiDocumentationProperty> = {};

    #properties: Record<string, TuiDocumentationProperty> = {};

    readonly #contents = new Contents();

    readonly #onChange = new EventEmitter<void>();

    #contentIndex?: number;

    constructor(
        @Inject(TuiAlertService)
        private readonly alertService: TuiAlertService,
        @Inject(NAVIGATOR)
        private readonly navigator: Navigator,
        @Inject(TuiApiHostService)
        @Optional()
        @SkipSelf()
        private readonly parent: TuiApiHostService | null,
    ) {
        this.#onChange
            .pipe(
                map(() => this.#renderTemplate()),
                distinctUntilChanged(),
            )
            .subscribe(template => {
                if (parent) {
                    this.#contentIndex = parent.setContent(template, this.#contentIndex);
                }
            });
    }

    setTemplate(
        tagName: string,
        baseAttributes: Record<string, TuiDocumentationProperty>,
    ): void {
        this.#tagName = tagName;
        this.#baseProperties = baseAttributes;
        this.#onChange.emit();
    }

    setProperty(name: string, property: TuiDocumentationProperty): void {
        this.#properties[name] = property;
        this.#onChange.emit();
    }

    deleteProperty(name: string): void {
        delete this.#properties[name];
        this.#onChange.emit();
    }

    setContent(content: string, index: number = this.#contents.length): number {
        this.#contents.set(index, content);
        this.#onChange.emit();

        return index;
    }

    deleteContent(index: number): void {
        this.#contents.delete(index);
        this.#onChange.emit();
    }

    async copyToClipboard(): Promise<void> {
        try {
            await this.navigator.clipboard.writeText(this.#renderTemplate());
            this.alertService
                .open(`Copied successfully`, {
                    status: `success`,
                })
                .subscribe();
        } catch {
            this.alertService
                .open(`Can't copy to clipboard`, {
                    status: `error`,
                })
                .subscribe();
        }
    }

    ngOnDestroy(): void {
        if (this.parent && this.#contentIndex !== undefined) {
            this.parent.deleteContent(this.#contentIndex);
        }
    }

    #renderTemplate(): string {
        if (!this.#tagName) {
            return this.#contents.join(`\n`, 0);
        }

        const properties: Record<string, TuiDocumentationProperty> = {
            ...this.#baseProperties,
            ...this.#properties,
        };
        const renderedProperties = Object.entries(properties)
            .sort((a, b) => {
                const aRange = typeRange.indexOf(a[1].type);
                const bRange = typeRange.indexOf(b[1].type);

                // Sorting by range
                if (aRange > bRange) {
                    return 1;
                }

                if (aRange < bRange) {
                    return -1;
                }

                // Sorting by value
                if (a[1].value && !b[1].value) {
                    return -1;
                }

                if (!a[1].value && b[1].value) {
                    return 1;
                }

                // Sorting by alphabet
                if (a[0] > b[0]) {
                    return 1;
                }

                if (a[0] < b[0]) {
                    return -1;
                }

                return 0;
            })
            .map(([name, property]) => {
                try {
                    return this.#renderProperty(name, property);
                } catch (error) {
                    if (error instanceof tuiGetAttrValue.UndefinedValueError) {
                        console.error(name, property);

                        return undefined;
                    }

                    throw error;
                }
            })
            .filter(value => value);

        renderedProperties.unshift(``);
        const renderedPropertiesStr =
            renderedProperties.join(` `).length > maxInlinePropertiesLength
                ? `${renderedProperties.join(`\n${indentStr}`)}\n`
                : renderedProperties.join(` `);

        const renderedContent = this.#contents.join(`\n${indentStr}`, 1);

        if (enforceEmptyTags.includes(this.#tagName)) {
            return `<${this.#tagName}${renderedPropertiesStr}/>`;
        }

        return `<${this.#tagName}${renderedPropertiesStr}>${
            renderedContent ? `\n${indentStr}${renderedContent}\n` : ``
        }</${this.#tagName}>`;
    }

    #renderProperty(
        name: string,
        property: TuiDocumentationProperty,
    ): string | undefined {
        const propertyName = tuiGetAttrName(property.type, name);

        // If value is {...}, return just '{...}'
        if (
            property.value &&
            property.value.startsWith(`{`) &&
            property.value.endsWith(`}`)
        ) {
            return `${propertyName}="{...}"`;
        }

        // If value is [...], return just '[...]'
        if (
            property.value &&
            property.value.startsWith(`[`) &&
            property.value.endsWith(`]`)
        ) {
            return `${propertyName}="[...]"`;
        }

        const value = tuiGetAttrValue(property.type, property.value);

        if (value) {
            return `${propertyName}="${value}"`;
        }

        return propertyName;
    }
}
