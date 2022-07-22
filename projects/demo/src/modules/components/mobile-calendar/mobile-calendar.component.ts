import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    tuiReplayedValueChangesFrom,
} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';
import {Observable} from 'rxjs';

export function dataStreamFactory(
    component: ExampleTuiMobileCalendarComponent,
): Observable<TuiDay> {
    return component.stream;
}

@Component({
    selector: 'example-tui-mobile-calendar',
    templateUrl: './mobile-calendar.template.html',
    styleUrls: ['./mobile-calendar.style.less'],
    changeDetection,
    providers: [
        {
            provide: TUI_CALENDAR_DATA_STREAM,
            deps: [ExampleTuiMobileCalendarComponent],
            useFactory: dataStreamFactory,
        },
    ],
})
export class ExampleTuiMobileCalendarComponent {
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleImportDialogModule = import(
        './examples/import/import-dialog-module.md?raw'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    minVariants = [TUI_FIRST_DAY, new TuiDay(2017, 2, 5), new TuiDay(1900, 0, 1)];

    min = this.minVariants[0];

    maxVariants = [TUI_LAST_DAY, new TuiDay(2020, 2, 5), new TuiDay(2300, 0, 1)];

    max = this.maxVariants[0];

    single = true;

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    control = new FormControl();

    stream = tuiReplayedValueChangesFrom<TuiDay>(this.control);
}
