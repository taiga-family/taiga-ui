import {
    EventEmitter,
    Inject,
    Injectable,
    OnDestroy,
    Optional,
    SkipSelf,
} from '@angular/core';
import {
    TuiApiHostTemplate,
    TuiDocumentationProperty,
    TuiDocumentationPropertyType,
} from '@taiga-ui/addon-doc/interfaces';
import {tuiRenderProperty} from '@taiga-ui/addon-doc/utils';
import {
    distinctUntilChanged,
    filter,
    map,
    Observable,
    shareReplay,
    startWith,
    Subject,
    takeUntil,
    tap,
} from 'rxjs';

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

    private readonly onChange = new EventEmitter<void>();

    private readonly beforeChangeTemplate$ = new Subject<void>();

    private readonly beforeChangeProperty$ = new Subject<string>();

    private readonly beforeChangeContent$ = new Subject<number>();

    private readonly destroy$ = new Subject<void>();

    readonly code$ = this.onChange.pipe(
        startWith(null),
        map(() => this.renderTemplate()),
        distinctUntilChanged(),
        shareReplay({
            bufferSize: 1,
            refCount: true,
        }),
    );

    constructor(
        @Inject(TuiApiHostService)
        @Optional()
        @SkipSelf()
        parent: TuiApiHostService | null,
    ) {
        if (parent) {
            parent.setContent(this.code$).pipe(takeUntil(this.destroy$)).subscribe();
        }
    }

    setTemplate(template$: Observable<TuiApiHostTemplate>): Observable<never> {
        return new Observable(() => {
            this.beforeChangeTemplate$.next();

            const prevTagName = this.tagName;
            const prevBaseProperties = this.baseProperties;

            return template$
                .pipe(
                    tap({
                        unsubscribe: () => {
                            this.tagName = prevTagName;
                            this.baseProperties = prevBaseProperties;
                            this.onChange.emit();
                        },
                    }),
                    takeUntil(this.beforeChangeTemplate$),
                )
                .subscribe(({tagName, baseProperties}) => {
                    this.tagName = tagName;
                    this.baseProperties = baseProperties;
                    this.onChange.emit();
                });
        });
    }

    setProperty(name: string, property: TuiDocumentationProperty): Observable<never> {
        return new Observable<never>(subscriber => {
            this.beforeChangeProperty$.next(name);

            this.properties[name] = property;
            this.onChange.emit();

            return this.beforeChangeProperty$
                .pipe(
                    filter(changeName => changeName === name),
                    tap({
                        unsubscribe: () => {
                            delete this.properties[name];
                            this.onChange.emit();
                        },
                    }),
                )
                .subscribe(() => subscriber.complete());
        });
    }

    setContent(content$: Observable<string>): Observable<never> {
        return new Observable(() => {
            const index = this.contents.length;

            this.beforeChangeContent$.next(index);

            return content$
                .pipe(
                    startWith(''),
                    distinctUntilChanged(),
                    tap({
                        unsubscribe: () => {
                            this.contents.delete(index);
                            this.onChange.emit();
                        },
                    }),
                    takeUntil(
                        this.beforeChangeContent$.pipe(
                            filter(changedIndex => index === changedIndex),
                        ),
                    ),
                )
                .subscribe(content => {
                    this.contents.set(index, content);
                    this.onChange.emit();
                });
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
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
