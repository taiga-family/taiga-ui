import {Location, NgForOf, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import type {AfterViewInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import type {Params} from '@angular/router';
import {ActivatedRoute, UrlSerializer} from '@angular/router';
import {TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {tuiCoerceValue, tuiInspectAny} from '@taiga-ui/addon-doc/utils';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAlertService} from '@taiga-ui/core/components/alert';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiInputNumber} from '@taiga-ui/kit/components/input-number';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';

import {TuiInspectPipe} from '../documentation/pipes/inspect.pipe';
import {TuiDocTypeReferencePipe} from '../documentation/pipes/type-reference.pipe';

const SERIALIZED_SUFFIX = '$';

@Component({
    standalone: true,
    selector: 'tr[tuiDocAPIItem]',
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        TuiChevron,
        TuiDataListWrapper,
        TuiDocTypeReferencePipe,
        TuiIcon,
        TuiInputNumber,
        TuiInspectPipe,
        TuiSwitch,
        TuiTextfield,
    ],
    templateUrl: './api-item.template.html',
    styleUrls: ['./api-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAPIItem<T> implements AfterViewInit {
    private readonly locationRef = inject(Location);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly urlSerializer = inject(UrlSerializer);
    private readonly urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);
    private readonly alerts = inject(TuiAlertService);

    @Input()
    public name = '';

    @Input()
    public type = '';

    @Input()
    public value?: T;

    @Input()
    public items: readonly T[] = [];

    @Output()
    public readonly valueChange = new EventEmitter<T>();

    public ngAfterViewInit(): void {
        this.parseParams(this.activatedRoute.snapshot.queryParams);
    }

    public onValueChange(value: T): void {
        this.value = value;
        this.valueChange.emit(value);
        this.setQueryParam(value);
    }

    public emitEvent(event: unknown): void {
        this.alerts
            .open(event ?? tuiInspectAny(event, 2), {label: this.name})
            .subscribe();
    }

    private clearBrackets(value: string): string {
        return value.replaceAll(/[()[\]]/g, '');
    }

    private parseParams(params: Params): void {
        const name = this.clearBrackets(this.name);
        const propertyValue: string | undefined = params[name];
        const propertyValueWithSuffix: number | string | undefined =
            params[`${name}${SERIALIZED_SUFFIX}`];

        if (!propertyValue && !propertyValueWithSuffix) {
            return;
        }

        let value =
            !!propertyValueWithSuffix && this.items
                ? this.items[propertyValueWithSuffix as number]
                : tuiCoerceValue(propertyValue);

        if (this.type === 'string' && tuiIsNumber(value)) {
            value = value.toString();
        }

        this.onValueChange(value as T);
    }

    private setQueryParam(value: T | boolean | number | string | null): void {
        const tree = this.urlSerializer.parse(this.locationRef.path());

        const isValueAvailableByKey = value instanceof Object;
        const computedValue =
            isValueAvailableByKey && this.items ? this.items.indexOf(value as T) : value;

        const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : '';
        const propName = this.clearBrackets(this.name) + suffix;

        tree.queryParams = {
            ...tree.queryParams,
            [propName]: computedValue,
        };

        this.locationRef.go(this.urlStateHandler(tree));
    }
}
