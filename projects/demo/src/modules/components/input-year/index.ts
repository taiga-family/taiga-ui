import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, TUI_FIRST_DAY, TUI_LAST_DAY, tuiProvide} from '@taiga-ui/cdk';
import {TuiNotificationComponent, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputYearModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiInputYearModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly minVariants = [TUI_FIRST_DAY.year, 2019, 2007];
    protected readonly maxVariants = [TUI_LAST_DAY.year, 2020, 2023];

    protected min = this.minVariants[0];
    protected max = this.maxVariants[0];

    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<number>
    > = [TUI_FALSE_HANDLER, year => year % 3 === 0];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    public override cleaner = false;

    public control = new FormControl<number | null>(null, Validators.required);
}
