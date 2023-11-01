import {Location} from '@angular/common';
import {
    Directive,
    EventEmitter,
    Inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    Self,
    SimpleChanges,
    TemplateRef,
} from '@angular/core';
import {ActivatedRoute, Params, UrlSerializer, UrlTree} from '@angular/router';
import {TuiDocumentationPropertyType} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {tuiCoerceValue, tuiGetAttrName, tuiInspectAny} from '@taiga-ui/addon-doc/utils';
import {
    TuiDestroyService,
    tuiIsNumber,
    tuiIsObject,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {BehaviorSubject, NEVER, Observable, Subject, switchAll, takeUntil} from 'rxjs';

const SERIALIZED_SUFFIX = '$';

// @bad TODO: refactor output and value sync
@Directive({
    selector: 'ng-template[documentationPropertyName]',
    providers: [TuiDestroyService],
    exportAs: 'documentationProperty',
})
export class TuiDocDocumentationPropertyConnectorDirective<T>
    implements OnInit, OnChanges, OnDestroy
{
    private readonly property$ = new Subject<Observable<never>>();

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
        @Inject(TuiDestroyService)
        @Self()
        readonly destroyService: TuiDestroyService,
        @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    ) {
        this.property$.pipe(switchAll(), takeUntil(destroyService)).subscribe();
    }

    @Input()
    documentationPropertyApiValueTransformer: (value: T) => string = value =>
        this.inspectInputPropertyValue(value);

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

        if ('documentationPropertyValue' in changes) {
            const change = changes['documentationPropertyValue'];

            if (change.firstChange && !('documentationPropertyDefaultValue' in changes)) {
                this.documentationPropertyDefaultValue = change.currentValue;
            }
        }

        this.updateApiHostProperty();
    }

    ngOnDestroy(): void {
        this.onValueChange(this.documentationPropertyDefaultValue!);
    }

    onValueChange(value: T): void {
        this.documentationPropertyValue = value;
        this.documentationPropertyValueChange.emit(value);
        this.setQueryParam(value);
        this.updateApiHostProperty();
    }

    emitEvent(event: unknown): void {
        // For more convenient debugging
        console.info(this.attrName, event);

        this.emits$.next(this.emits$.value + 1);

        let content: string | undefined;

        if (event !== undefined) {
            content = tuiInspectAny(event, 2);
        }

        this.alerts.open(content, {label: this.attrName}).subscribe();
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

    private updateApiHostProperty(): void {
        if (this.documentationPropertyPreventUpdateApiHost) {
            return;
        }

        const {documentationPropertyMode: mode, documentationPropertyName: name} = this;

        switch (mode) {
            case 'input-output':
                return this.updateInputOutputApiHostProperty(name);
            case 'output':
                return this.updateOutputApiHostProperty(name);
            default:
                return this.updateInputApiHostProperty(name, mode);
        }
    }

    private updateInputOutputApiHostProperty(name: string): void {
        this.property$.next(
            this.apiHostService?.setProperty(name, {
                type: 'input-output',
                value: name,
            }) ?? NEVER,
        );
    }

    private updateOutputApiHostProperty(name: string): void {
        this.property$.next(
            this.apiHostService?.setProperty(name, {
                type: 'input-output',
                value: `on${name[0].toUpperCase()}${name.slice(1)}()`,
            }) ?? NEVER,
        );
    }

    private updateInputApiHostProperty(
        name: string,
        mode: TuiDocumentationPropertyType,
    ): void {
        const {
            documentationPropertyValue: value,
            documentationPropertyDefaultValue: defaultValue,
        } = this;

        this.property$.next(
            value === defaultValue
                ? NEVER
                : this.apiHostService?.setProperty(name, {
                      type: mode,
                      value: this.documentationPropertyApiValueTransformer(value),
                  }) ?? NEVER,
        );
    }

    private inspectInputPropertyValue(value: unknown): string {
        if (value === undefined) {
            return '';
        }

        if (typeof value === 'function') {
            return 'fn';
        }

        if (tuiIsObject(value)) {
            if (Array.isArray(value)) {
                return '[...]';
            }

            return '{...}';
        }

        return tuiInspectAny(value, 2);
    }
}
