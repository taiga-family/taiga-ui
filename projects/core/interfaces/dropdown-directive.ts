import {TuiActiveZoneDirective, TuiNativeFocusableElement} from '@taiga-ui/cdk';
import {
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

export interface TuiDropdown<C = object> {
    refresh$: Observable<unknown>;
    clientRect: ClientRect;
    content: PolymorpheusContent;
    host: TuiNativeFocusableElement | HTMLElement;
    align: TuiHorizontalDirection;
    minHeight: number;
    maxHeight: number;
    direction?: TuiVerticalDirection | null;
    limitMinWidth?: TuiDropdownWidth;
    sided?: boolean;
    fixed?: boolean;
    activeZone?: TuiActiveZoneDirective | null;
    context?: C;
}
