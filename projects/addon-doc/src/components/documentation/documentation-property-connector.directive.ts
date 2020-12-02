import {Location} from '@angular/common';
import {
    Directive,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Output,
    TemplateRef,
} from '@angular/core';
import {ActivatedRoute, Params, UrlSerializer} from '@angular/router';
import {Subject} from 'rxjs';

const SERIALIZED_SUFFIX = '$';

export type DocumentationPropertyType = 'input' | 'output' | 'input-output' | null;

// @bad TODO: добаботать параметры output, синхронизацию значений
@Directive({
    selector: 'ng-template[documentationPropertyName]',
})
export class TuiDocDocumentationPropertyConnectorDirective<T>
    implements OnInit, OnChanges {
    @Input()
    documentationPropertyName = '';

    @Input()
    documentationPropertyMode: DocumentationPropertyType = null;

    @Input()
    documentationPropertyType = '';

    @Input()
    documentationPropertyValue: T | null = null;

    @Input()
    documentationPropertyDeprecated = false;

    @Input()
    documentationPropertyValues: ReadonlyArray<T> | null = null;

    @Output()
    readonly documentationPropertyValueChange = new EventEmitter<T>();

    readonly changed$ = new Subject<void>();

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<{}>,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
        @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
    ) {}

    ngOnInit() {
        this.parseParams(this.activatedRoute.snapshot.queryParams);
    }

    get attrName(): string {
        switch (this.documentationPropertyMode) {
            case 'input':
                return `[${this.documentationPropertyName}]`;
            case 'output':
                return `(${this.documentationPropertyName})`;
            case 'input-output':
                return `[(${this.documentationPropertyName})]`;
            default:
                return this.documentationPropertyName;
        }
    }

    get hasItems(): boolean {
        return !!this.documentationPropertyValues;
    }

    get shouldShowValues(): boolean {
        return this.documentationPropertyMode !== 'output';
    }

    ngOnChanges() {
        this.changed$.next();
    }

    onValueChange(value: T) {
        this.documentationPropertyValue = value;
        this.documentationPropertyValueChange.emit(value);
        this.setQueryParam(value);
    }

    private parseParams(params: Params) {
        if (
            !params[this.documentationPropertyName] &&
            !params[this.documentationPropertyName + SERIALIZED_SUFFIX]
        ) {
            return;
        }

        const isValueAvailableByKey = !!params[
            this.documentationPropertyName + SERIALIZED_SUFFIX
        ];

        if (isValueAvailableByKey && this.documentationPropertyValues) {
            this.onValueChange(
                this.documentationPropertyValues[
                    params[this.documentationPropertyName + SERIALIZED_SUFFIX]
                ],
            );

            return;
        }

        this.onValueChange(
            !isNaN(Number(params[this.documentationPropertyName]))
                ? Number(params[this.documentationPropertyName])
                : params[this.documentationPropertyName],
        );
    }

    private setQueryParam(value: T) {
        const tree = this.urlSerializer.parse(this.locationRef.path());

        const isValueAvailableByKey = value instanceof Object;
        const computedValue =
            isValueAvailableByKey && this.documentationPropertyValues
                ? this.documentationPropertyValues.indexOf(value)
                : value;
        const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : '';
        const propName = this.documentationPropertyName + suffix;

        tree.queryParams = {
            ...tree.queryParams,
            [propName]: computedValue,
        };

        this.locationRef.go(String(tree));
    }
}
