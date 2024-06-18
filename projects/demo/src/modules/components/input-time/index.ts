import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, tuiProvide, TuiTime} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDropdown, TuiHint, TuiNotificationComponent} from '@taiga-ui/core';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiInputTimeModule,
        ReactiveFormsModule,
        TuiDropdown,
        TuiHint,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties(['tuiTextfieldFiller']),
    ],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly disabledItemHandlerVariants: ReadonlyArray<
        TuiBooleanHandler<TuiTime>
    > = [
        TUI_FALSE_HANDLER,
        (item: TuiTime) => String(item) === '06:00' || item > TuiTime.currentLocal(),
    ];

    protected disabledItemHandler = this.disabledItemHandlerVariants[0];

    protected readonly itemSizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [
        's',
        'm',
        'l',
    ];

    protected itemSize: TuiSizeL | TuiSizeS = this.itemSizeVariants[1];

    protected readonly itemsVariants: ReadonlyArray<readonly TuiTime[]> = [
        [],
        tuiCreateTimePeriods(),
    ];

    protected items = this.itemsVariants[0];

    protected strict = false;

    protected readonly modeVariants: readonly TuiTimeMode[] = [
        'HH:MM',
        'HH:MM:SS',
        'HH:MM:SS.MSS',
    ];

    protected mode = this.modeVariants[0];

    public override cleaner = false;

    public control = new FormControl(TuiTime.currentLocal(), Validators.required);
}
