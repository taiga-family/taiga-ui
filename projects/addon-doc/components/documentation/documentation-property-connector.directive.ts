import {Location} from '@angular/common';
import {
    Directive,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnInit,
    Optional,
    Output,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import {ActivatedRoute, Params, UrlSerializer, UrlTree} from '@angular/router';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {TuiDocumentationPropertyType} from '@taiga-ui/addon-doc/types';
import {tuiCoerceValue, tuiGetAttrName, tuiInspectAny} from '@taiga-ui/addon-doc/utils';
import {tuiIsNumber, TuiStringHandler} from '@taiga-ui/cdk';
import {BehaviorSubject, Subject} from 'rxjs';

const SERIALIZED_SUFFIX = '$';

/**
 * @deprecated: use {@link TuiDocumentationPropertyType}
 * TODO: remove in v4.0
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export type DocumentationPropertyType = TuiDocumentationPropertyType;

// @bad TODO: refactor output and value sync
@Directive({
    selector: 'ng-template[documentationPropertyName]',
    exportAs: 'documentationProperty',
})
export class TuiDocDocumentationPropertyConnectorDirective<T>
    implements OnInit, OnChanges
{
    @Input()
    documentationPropertyName = '';

    @Input()
    documentationPropertyMode: TuiDocumentationPropertyType = null;

    @Input()
    documentationPropertyType = '';

    @Input()
    documentationPropertyValue!: T;

    @Input()
    documentationPropertyDeprecated = false;

    @Input()
    documentationPropertyDefaultValue?: T;

    @Input()
    documentationPropertyPreventUpdateApiHost = false;

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
        @Inject(TUI_DOC_URL_STATE_HANDLER)
        private readonly urlStateHandler: TuiStringHandler<UrlTree>,
        @Inject(TuiApiHostService)
        @Optional()
        readonly apiHostService: TuiApiHostService | null,
    ) {}

    @Input()
    documentationPropertyApiValueTransformer: (value: T) => string = value =>
        value !== undefined ? tuiInspectAny(value, 2) : '';

    ngOnInit(): void {
        this.parseParams(this.activatedRoute.snapshot.queryParams);
    }

    get attrName(): string {
        return tuiGetAttrName(
            this.documentationPropertyMode,
            this.documentationPropertyName,
        );
    }

    get hasItems(): boolean {
        return !!this.documentationPropertyValues;
    }

    get shouldShowValues(): boolean {
        return this.documentationPropertyMode !== 'output';
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.changed$.next();

        if ('documentationPropertyName' in changes) {
            const change = changes['documentationPropertyName'];

            if (!change.firstChange) {
                this.apiHostService?.deleteProperty(change.previousValue);
            }
        }

        if ('documentationPropertyValue' in changes) {
            const change = changes['documentationPropertyValue'];

            if (change.firstChange && !('documentationPropertyDefaultValue' in changes)) {
                this.documentationPropertyDefaultValue = change.currentValue;
            }
        }

        this.#updateApiHostProperty();
    }

    onValueChange(value: T): void {
        this.documentationPropertyValue = value;
        this.documentationPropertyValueChange.emit(value);
        this.setQueryParam(value);
        this.#updateApiHostProperty();
    }

    emitEvent(event: unknown): void {
        // For more convenient debugging
        console.info(this.attrName, event);

        this.emits$.next(this.emits$.value + 1);
    }

    private parseParams(params: Params): void {
        const propertyValue: string | undefined = params[this.documentationPropertyName];
        const propertyValueWithSuffix: number | string | undefined =
            params[`${this.documentationPropertyName}${SERIALIZED_SUFFIX}`];

        if (!propertyValue && !propertyValueWithSuffix) {
            return;
        }

        let value =
            !!propertyValueWithSuffix && this.documentationPropertyValues
                ? this.documentationPropertyValues[propertyValueWithSuffix as number]
                : tuiCoerceValue(propertyValue);

        if (this.documentationPropertyType === 'string' && tuiIsNumber(value)) {
            value = value.toString();
        }

        this.onValueChange(value as T);
    }

    private setQueryParam(value: T | boolean | number | string | null): void {
        const tree = this.urlSerializer.parse(this.locationRef.path());

        const isValueAvailableByKey = value instanceof Object;
        const computedValue =
            isValueAvailableByKey && this.documentationPropertyValues
                ? this.documentationPropertyValues.indexOf(value as T)
                : value;
        const computedDefaultValue =
            isValueAvailableByKey &&
            this.documentationPropertyValues &&
            this.documentationPropertyDefaultValue !== undefined
                ? this.documentationPropertyValues.indexOf(
                      this.documentationPropertyDefaultValue,
                  )
                : this.documentationPropertyDefaultValue;

        const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : '';
        const propName = this.documentationPropertyName + suffix;

        if (computedDefaultValue === computedValue) {
            delete tree.queryParams[propName];
        } else {
            tree.queryParams[propName] = computedValue;
        }

        this.locationRef.go(this.urlStateHandler(tree));
    }

    #updateApiHostProperty(): void {
        if (this.documentationPropertyPreventUpdateApiHost) {
            return;
        }

        const {
            documentationPropertyValue: value,
            documentationPropertyDefaultValue: defaultValue,
            documentationPropertyMode: mode,
            documentationPropertyName: name,
        } = this;

        if (mode === 'input-output') {
            this.apiHostService?.setProperty(name, {
                type: mode,
                value: name,
            });

            return;
        }

        if (mode === 'output') {
            this.apiHostService?.setProperty(name, {
                type: mode,
                value: `on${name[0].toUpperCase()}${name.slice(1)}()`,
            });

            return;
        }

        const valueInspected = value !== undefined ? tuiInspectAny(value, 2) : '';
        const defaultValueInspected =
            defaultValue !== undefined ? tuiInspectAny(defaultValue, 2) : '';

        if (valueInspected === defaultValueInspected) {
            this.apiHostService?.deleteProperty(this.documentationPropertyName);
        } else {
            this.apiHostService?.setProperty(this.documentationPropertyName, {
                type: this.documentationPropertyMode,
                value: this.documentationPropertyApiValueTransformer(value),
            });
        }
    }
}
