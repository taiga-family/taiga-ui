import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiProvideMobileCalendar} from '@taiga-ui/addon-mobile';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {
    TUI_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    tuiProvide,
} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {
    TuiDropdownModule,
    TuiHint,
    TuiLinkDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiNamedDay} from '@taiga-ui/kit';
import {TuiInputDateModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

const TWO_DOTS: [string, string] = ['var(--tui-primary)', 'var(--tui-info-fill)'];
const ONE_DOT: [string] = ['var(--tui-success-fill)'];

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiInputDateModule,
        TuiTextfieldControllerModule,
        TuiDropdownModule,
        TuiHint,
        TuiLinkDirective,
        ReactiveFormsModule,
        InheritedDocumentationComponent,
        RouterLink,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleComponent),
        tuiProvideMobileCalendar(),
    ],
})
export default class ExampleComponent extends AbstractExampleTuiControl {
    public override cleaner = false;

    public control = new FormControl<TuiDay | null>(null, Validators.required);

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        'native-date-transformer.directive.ts': import(
            './examples/5/native-date-transformer.directive.ts?raw'
        ),
    };

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

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiDay>
    > = [TUI_FALSE_HANDLER, ({day}) => day % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly itemsVariants = [
        [],
        [new TuiNamedDay(TUI_LAST_DAY.append({year: -1}), 'Until today')],
    ];

    protected readonly markerHandlerVariants: readonly TuiMarkerHandler[] = [
        (day: TuiDay) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
    ];

    protected markerHandler: TuiMarkerHandler | null = null;

    protected items = this.itemsVariants[0];
}
