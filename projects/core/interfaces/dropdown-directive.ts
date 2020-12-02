import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {TuiDropdownWidth} from '@taiga-ui/core/enums';
import {TuiHorizontalDirection, TuiVerticalDirection} from '@taiga-ui/core/types';
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
    limitMinWidth?: TuiDropdownWidth;
    sided?: boolean;
    fixed?: boolean;
    activeZone?: TuiActiveZoneDirective | null;
}
