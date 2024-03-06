import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiDayRange} from '@taiga-ui/cdk';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiControlValue,
    TuiDay,
} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import type {Observable} from 'rxjs';

@Component({
    selector: 'example-tui-mobile-calendar',
    templateUrl: './mobile-calendar.template.html',
    styleUrls: ['./mobile-calendar.style.less'],
    changeDetection,
    providers: [
        {
            provide: TUI_CALENDAR_DATE_STREAM,
            deps: [ExampleTuiMobileCalendarComponent],
            useFactory: (
                component: ExampleTuiMobileCalendarComponent,
            ): Observable<TuiDay> => component.stream,
        },
    ],
})
export class ExampleTuiMobileCalendarComponent {
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleImportDialogModule = import(
        './examples/import/import-dialog-module.md?raw'
    );

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

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
    > = [ALWAYS_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected control = new FormControl<TuiDay | TuiDayRange | null>(null);

    protected stream = tuiControlValue<TuiDay>(this.control);
}
