import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiDropdownWidthT,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core/types';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

export interface TuiDropdown {
    refresh$: Observable<any>;
    clientRect: ClientRect;
    content: PolymorpheusContent;
    host: HTMLElement;
    align: TuiHorizontalDirection;
    minHeight: number;
    maxHeight: number;
    direction?: TuiVerticalDirection | null;
    limitMinWidth?: TuiDropdownWidthT;
    sided?: boolean;
    fixed?: boolean;
    activeZone?: TuiActiveZoneDirective | null;
}
