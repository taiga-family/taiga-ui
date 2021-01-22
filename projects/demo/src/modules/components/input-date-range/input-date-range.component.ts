import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {default as example2Ts} from '!!raw-loader!./examples/2/component.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/template.html';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDay,
    TuiDayLike,
    TuiMonth,
} from '@taiga-ui/cdk';
import {
    TUI_DEFAULT_MARKER_HANDLER,
    TuiBaseColor,
    TuiColor,
    TuiMarkerHandler,
} from '@taiga-ui/core';
import {tuiCreateDefaultDayRangePeriods, TuiDayRangePeriod} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

const TWO_DOTS: [TuiColor, TuiColor] = [TuiBaseColor.Primary, TuiBaseColor.Secondary];
const ONE_DOT: [TuiColor] = [TuiBaseColor.Success];

@Component({
    selector: 'example-tui-input-date-range',
    templateUrl: './input-date-range.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputDateRangeComponent),
        },
    ],
})
export class ExampleTuiInputDateRangeComponent extends AbstractExampleTuiReactiveField {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    minVariants = [TUI_FIRST_DAY, new TuiDay(2021, 2, 5), new TuiDay(1900, 0, 1)];

    min: TuiDay = this.minVariants[0];

    readonly minLengthVariants: ReadonlyArray<TuiDayLike> = [{day: 3}, {day: 15}];

    minLength: TuiDayLike | null = null;

    maxLengthVariants: ReadonlyArray<TuiDayLike> = [{day: 5}, {month: 1}, {year: 1}];

    maxLength: TuiDayLike | null = null;

    maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2018, 9, 30),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    max = this.maxVariants[0];

    readonly markerHandlerVariants: ReadonlyArray<TuiMarkerHandler> = [
        TUI_DEFAULT_MARKER_HANDLER,
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    markerHandler: TuiMarkerHandler = this.markerHandlerVariants[0];

    cleaner = false;

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    control = new FormControl(null, Validators.required);

    readonly itemsVariants: ReadonlyArray<ReadonlyArray<TuiDayRangePeriod>> = [
        [],
        tuiCreateDefaultDayRangePeriods(),
    ];

    items = this.itemsVariants[0];

    readonly defaultViewedMonthVariants: ReadonlyArray<TuiMonth> = [
        TuiMonth.currentLocal(),
        TuiMonth.currentLocal().append({month: 1}),
        new TuiMonth(2007, 5),
    ];

    defaultViewedMonth = this.defaultViewedMonthVariants[0];
}
