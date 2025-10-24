import {Location} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    model,
    type OnInit,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, type Params, UrlSerializer} from '@angular/router';
import {TUI_DOC_ICONS, TUI_DOC_URL_STATE_HANDLER} from '@taiga-ui/addon-doc/tokens';
import {tuiCoerceValue, tuiInspectAny} from '@taiga-ui/addon-doc/utils';
import {tuiIsNumber} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAlertService} from '@taiga-ui/core/components/alert';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiTextfield} from '@taiga-ui/core/components/textfield';
import {TuiDataListWrapper} from '@taiga-ui/kit/components/data-list-wrapper';
import {TuiInputNumber} from '@taiga-ui/kit/components/input-number';
import {TuiSelect} from '@taiga-ui/kit/components/select';
import {TuiSwitch} from '@taiga-ui/kit/components/switch';
import {TuiChevron} from '@taiga-ui/kit/directives/chevron';

import {TuiInspectPipe} from '../documentation/pipes/inspect.pipe';
import {TuiDocTypeReferencePipe} from '../documentation/pipes/type-reference.pipe';
import {TuiDocAPINumberItem} from './api-item-number.directive';

const SERIALIZED_SUFFIX = '$';

@Component({
    selector: 'tr[tuiDocAPIItem]',
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDocTypeReferencePipe,
        TuiIcon,
        TuiInputNumber,
        TuiInspectPipe,
        TuiSelect,
        TuiSwitch,
        TuiTextfield,
    ],
    templateUrl: './api-item.template.html',
    styleUrl: './api-item.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAPIItem<T> implements OnInit {
    private readonly locationRef = inject(Location);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly urlSerializer = inject(UrlSerializer);
    private readonly urlStateHandler = inject(TUI_DOC_URL_STATE_HANDLER);
    private readonly alerts = inject(TuiAlertService);

    protected readonly icons = inject(TUI_DOC_ICONS);

    protected readonly numberItem = inject(TuiDocAPINumberItem, {
        self: true,
        optional: true,
    });

    public readonly name = input('');

    public readonly type = input('');

    public readonly value = model<T>();

    public readonly items = input<readonly T[]>([]);

    public ngOnInit(): void {
        this.parseParams(this.activatedRoute.snapshot.queryParams);
    }

    public onValueChange(value: T): void {
        this.value.set(value);
        this.setQueryParam(value);
    }

    public emitEvent(event: unknown): void {
        console.info('emitEvent', event);

        const alert =
            !event || event?.toString() === '[object Object]'
                ? tuiInspectAny(event, 2)
                : (event as string);

        this.alerts.open(alert, {label: this.name()}).subscribe();
    }

    private clearBrackets(value: string): string {
        return value.replaceAll(/[()[\]]/g, '');
    }

    private parseParams(params: Params): void {
        const name = this.clearBrackets(this.name());
        const propertyValue: string | undefined = params[name];
        const propertyValueWithSuffix: number | string | undefined =
            params[`${name}${SERIALIZED_SUFFIX}`];

        if (!propertyValue && !propertyValueWithSuffix) {
            return;
        }

        const items = this.items();
        let value =
            !!propertyValueWithSuffix && items
                ? items[propertyValueWithSuffix as number]
                : tuiCoerceValue(propertyValue);

        if (this.type() === 'string' && tuiIsNumber(value)) {
            value = value.toString();
        }

        this.onValueChange(value as T);
    }

    private setQueryParam(value: T | boolean | number | string | null): void {
        const tree = this.urlSerializer.parse(this.locationRef.path());

        const isValueAvailableByKey = value instanceof Object;
        const items = this.items();
        const computedValue =
            isValueAvailableByKey && items ? items.indexOf(value as T) : value;

        const suffix = isValueAvailableByKey ? SERIALIZED_SUFFIX : '';
        const propName = this.clearBrackets(this.name()) + suffix;

        tree.queryParams = {
            ...tree.queryParams,
            [propName]: computedValue,
        };

        this.locationRef.go(this.urlStateHandler(tree));
    }
}
