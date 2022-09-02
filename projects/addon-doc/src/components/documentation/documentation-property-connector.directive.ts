import {Location} from '@angular/common';
import type {OnChanges, OnInit} from '@angular/core';
import {Directive, EventEmitter, Inject, Input, Output, TemplateRef} from '@angular/core';
import {ActivatedRoute, Params, UrlSerializer} from '@angular/router';
import {BehaviorSubject, Subject} from 'rxjs';

import {tuiCoerceValue} from '../../utils/coerce-value';

const SERIALIZED_SUFFIX = `$`;

export type DocumentationPropertyType = 'input' | 'output' | 'input-output' | null;

// @bad TODO: refactor output and value sync
@Directive({
    selector: `ng-template[documentationPropertyName]`,
    exportAs: `documentationProperty`,
})
export class TuiDocDocumentationPropertyConnectorDirective<T>
    implements OnInit, OnChanges
{
    @Input()
    documentationPropertyName = ``;

    @Input()
    documentationPropertyMode: DocumentationPropertyType = null;

    @Input()
    documentationPropertyType = ``;

    @Input()
    documentationPropertyValue!: T;

    @Input()
    documentationPropertyDeprecated = false;

    @Input()
    documentationPropertyValues: readonly T[] | null = null;

    @Output()
    readonly documentationPropertyValueChange = new EventEmitter<T>();

    readonly changed$ = new Subject<void>();

    readonly emits$ = new BehaviorSubject(1);

    constructor(
        @Inject(TemplateRef) readonly template: TemplateRef<Record<string, unknown>>,
        @Inject(Location) private readonly locationRef: Location,
        @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
        @Inject(UrlSerializer) private readonly urlSerializer: UrlSerializer,
    ) {}

    ngOnInit(): void {
        this.parseParams(this.activatedRoute.snapshot.queryParams);
    }

    get attrName(): string {
        switch (this.documentationPropertyMode) {
            case `input`:
                return `[${this.documentationPropertyName}]`;
            case `output`:
                return `(${this.documentationPropertyName})`;
            case `input-output`:
                return `[(${this.documentationPropertyName})]`;
            default:
                return this.documentationPropertyName;
        }
    }

    get hasItems(): boolean {
        return !!this.documentationPropertyValues;
    }

    get shouldShowValues(): boolean {
        return this.documentationPropertyMode !== `output`;
    }

    ngOnChanges(): void {
        this.changed$.next();
    }

    onValueChange(value: T): void {
        this.documentationPropertyValue = value;
        this.documentationPropertyValueChange.emit(value);
        this.setQueryParam(value);
    }

    emitEvent(event: unknown): void {
        // For more convenient debugging
        console.info(this.attrName, event);

        this.emits$.next(this.emits$.value + 1);
    }

    private parseParams(params: Params): void {
        const propertyValue: string | undefined = params[this.documentationPropertyName];
        const propertyValueWithSuffix: string | number | undefined =
            params[`${this.documentationPropertyName}${SERIALIZED_SUFFIX}`];

        if (!propertyValue && !propertyValueWithSuffix) {
            return;
        }

        const value =
            !!propertyValueWithSuffix && this.documentationPropertyValues
                ? this.documentationPropertyValues[propertyValueWithSuffix as number]
                : tuiCoerceValue(propertyValue);

        this.onValueChange(value as T);
    }

    private setQueryParam(value: T | string | number | boolean | null): void {
        const tree = this.urlSerializer.parse(this.locationRef.path());

        const isValueAvailableByKey = value instanceof Object;
        const computedValue =
            isValueAvailableByKey && this.documentationPropertyValues
                ? this.documentationPropertyValues.indexOf(value as T)
                : value;

        const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : ``;
        const propName = this.documentationPropertyName + suffix;

        tree.queryParams = {
            ...tree.queryParams,
            [propName]: computedValue,
        };

        this.locationRef.go(String(tree));
    }
}
