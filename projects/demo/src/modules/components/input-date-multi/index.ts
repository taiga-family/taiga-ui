import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiMobileCalendar, tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    tuiProvide,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {TuiDropdownOpenDirective, TuiHintOptionsDirective} from '@taiga-ui/core';
import {TuiInputDateMultiModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputDateMultiModule,
        ReactiveFormsModule,
        TuiDropdownOpenDirective,
        TuiHintOptionsDirective,
        TuiTextfieldControllerModule,
        TuiMobileCalendar,
        InheritedDocumentationComponent,
    ],

    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiProvideMobileCalendar(),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
        new TuiDay(new Date().getFullYear() + 3, 1, 1),
    ];

    protected min = this.minVariants[0];

    protected maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2017, 11, 11),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    protected max = this.maxVariants[0];

    protected rowsVariants = [Infinity, 10, 3, 2];

    protected rows = this.rowsVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        (day: TuiDay) =>
            day.day % 2 === 0
                ? ['var(--tui-primary)', 'var(--tui-info-fill)']
                : ['var(--tui-success-fill)'],
    ];

    protected markerHandler: TuiMarkerHandler | null = null;

    public control = new FormControl<TuiDay[]>([], Validators.required);
}
