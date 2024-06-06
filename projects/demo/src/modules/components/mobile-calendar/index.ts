import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiComponentPipe, TuiExamplePipe, TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiMobileCalendarComponent} from '@taiga-ui/addon-mobile';
import type {TuiBooleanHandler, TuiDayRange} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiControlValue,
    TuiDay,
} from '@taiga-ui/cdk';
import {TuiLinkDirective} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';

@Component({
    standalone: true,
    imports: [
        TuiAddonDoc,
        TuiLinkDirective,
        RouterLink,
        TuiMobileCalendarComponent,
        TuiComponentPipe,
        TuiExamplePipe,
        TuiSetupComponent,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        {
            deps: [PageComponent],
            provide: TUI_CALENDAR_DATE_STREAM,
            useFactory: (component: PageComponent): Observable<TuiDay> =>
                component.stream,
        },
    ],
})
export default class PageComponent {
    protected minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    protected min = this.minVariants[0];

    protected maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0];

    protected single = true;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected control = new FormControl<TuiDay | TuiDayRange | null>(null);

    protected stream = tuiControlValue<TuiDay>(this.control);
    protected readonly routes = DemoRoute;
}
