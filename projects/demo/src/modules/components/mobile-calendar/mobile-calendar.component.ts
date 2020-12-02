import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as exampleImportDialogModule from '!!raw-loader!./examples/import/import-dialog-module.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
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
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

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
    readonly exampleImportModule = exampleImportModule;
    readonly exampleImportDialogModule = exampleImportDialogModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
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
