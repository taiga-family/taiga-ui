import {Location} from '@angular/common';
import {
    Directive,
    inject,
    input,
    model,
    type OnChanges,
    type OnInit,
    signal,
    TemplateRef,
} from '@angular/core';
import {ActivatedRoute, type Params, UrlSerializer} from '@angular/router';
import {TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {tuiCleanObject, tuiCoerceValue, tuiInspectAny} from '@taiga-ui/addon-doc/utils';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAlertService} from '@taiga-ui/core/components/alert';
import {Subject} from 'rxjs';

const SERIALIZED_SUFFIX = '$';

export type TuiDocumentationPropertyType = 'input-output' | 'input' | 'output' | null;

// @bad TODO: refactor output and value sync
@Directive({
    standalone: true,
    selector: 'ng-template[documentationPropertyName]',
    exportAs: 'documentationProperty',
})
export class TuiDocDocumentationPropertyConnector<T> implements OnInit, OnChanges {
    private readonly locationRef = inject(Location);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly urlSerializer = inject(UrlSerializer);
    private readonly urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);
    private readonly alerts = inject(TuiAlertService);

    public readonly documentationPropertyName = input('');

    public readonly documentationPropertyMode = input<TuiDocumentationPropertyType>(null);

    public readonly documentationPropertyType = input('');

    public readonly documentationPropertyValue = model<T>();

    public readonly documentationPropertyDeprecated = input(false);

    public readonly documentationPropertyValues = input<readonly T[] | null>(null);

    public readonly changed$ = new Subject<void>();

    public readonly emits = signal(1);

    public readonly template = inject(TemplateRef);

    public get attrName(): string {
        switch (this.documentationPropertyMode()) {
            case 'input':
                return `[${this.documentationPropertyName()}]`;
            case 'input-output':
                return `[(${this.documentationPropertyName()})]`;
            case 'output':
                return `(${this.documentationPropertyName()})`;
            default:
                return this.documentationPropertyName();
        }
    }

    public get shouldShowValues(): boolean {
        return this.documentationPropertyMode() !== 'output';
    }

    public get hasItems(): boolean {
        return !!this.documentationPropertyValues();
    }

    public ngOnInit(): void {
        this.parseParams(this.activatedRoute.snapshot.queryParams);
    }

    public ngOnChanges(): void {
        this.changed$.next();
    }

    public onValueChange(value: T): void {
        this.documentationPropertyValue.set(value);
        this.setQueryParam(value);
    }

    public emitEvent(event: unknown): void {
        // For more convenient debugging
        console.info(this.attrName, event);

        this.emits.update((x) => ++x);

        let content: string | undefined;

        if (event !== undefined) {
            content = tuiInspectAny(event, 2);
        }

        this.alerts.open(content, {label: this.attrName}).subscribe();
    }

    private parseParams(params: Params): void {
        const propertyValue: string | undefined =
            params[this.documentationPropertyName()];
        const propertyValueWithSuffix: number | string | undefined =
            params[`${this.documentationPropertyName()}${SERIALIZED_SUFFIX}`];

        if (!propertyValue && !propertyValueWithSuffix) {
            return;
        }

        const documentationPropertyValues = this.documentationPropertyValues();
        let value =
            !!propertyValueWithSuffix && documentationPropertyValues
                ? documentationPropertyValues[propertyValueWithSuffix as number]
                : tuiCoerceValue(propertyValue);

        if (this.documentationPropertyType() === 'string' && tuiIsNumber(value)) {
            value = value.toString();
        }

        this.onValueChange(value as T);
    }

    private setQueryParam(value: unknown): void {
        const tree = this.urlSerializer.parse(this.locationRef.path());
        const isValueAvailableByKey = value instanceof Object;
        const name = this.documentationPropertyName();
        const nameWithSuffix = `${name}${SERIALIZED_SUFFIX}`;

        const documentationPropertyValues = this.documentationPropertyValues();
        const computedValue =
            isValueAvailableByKey && documentationPropertyValues
                ? documentationPropertyValues.indexOf(value as T)
                : value;

        tree.queryParams = tuiCleanObject({
            ...tree.queryParams,
            /**
             * Caretaker note: reset previous conflicted param in route
             * issue: https://github.com/taiga-family/taiga-ui/issues/9764
             */
            ...(isValueAvailableByKey
                ? {
                      [nameWithSuffix]: computedValue,
                      [name]: undefined,
                  }
                : {
                      [nameWithSuffix]: undefined,
                      [name]: computedValue,
                  }),
        });

        this.locationRef.go(this.urlStateHandler(tree));
    }
}
