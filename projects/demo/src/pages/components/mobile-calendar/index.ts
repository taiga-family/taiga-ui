import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_CALENDAR_DATE_STREAM, TuiMobileCalendar} from '@taiga-ui/addon-mobile';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    type TuiBooleanHandler,
    tuiControlValue,
    TuiDay,
    type TuiDayRange,
} from '@taiga-ui/cdk';
import {type Observable} from 'rxjs';

@Component({
    imports: [TuiDemo, TuiMobileCalendar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [
        {
            deps: [Page],
            provide: TUI_CALENDAR_DATE_STREAM,
            useFactory: (component: Page): Observable<TuiDay> => component.stream,
        },
    ],
})
export default class Page {
    protected minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    protected min = this.minVariants[0]!;

    protected maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0]!;

    protected single = true;
    protected multi = false;

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0]!;

    protected control = new FormControl<TuiDay | TuiDayRange | null>(null);

    protected stream = tuiControlValue<TuiDay>(this.control);
    protected readonly routes = DemoRoute;

    protected readonly examples = [
        'Custom dropdown',
        'Range',
        'Localization',
        'Custom dropdown (range)',
        'Custom dropdown (multi)',
        'Without header',
    ];
}
