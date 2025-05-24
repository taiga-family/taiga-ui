import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiBooleanHandler, TuiTimeMode} from '@taiga-ui/cdk';
import {TUI_FALSE_HANDLER, tuiProvide, TuiTime} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDropdown, TuiHint} from '@taiga-ui/core';
import {tuiCreateTimePeriods} from '@taiga-ui/kit';
import {TuiInputTimeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        InheritedDocumentation,
        ReactiveFormsModule,
        TuiDemo,
        TuiDropdown,
        TuiHint,
        TuiInputTimeModule,
        TuiTextfieldControllerModule,
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

    protected disabledItemHandler = this.disabledItemHandlerVariants[0]!;

    protected readonly itemSizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = [
        's',
        'm',
        'l',
    ];

    protected itemSize: TuiSizeL | TuiSizeS = this.itemSizeVariants[1]!;

    protected readonly itemsVariants: ReadonlyArray<readonly TuiTime[]> = [
        [],
        tuiCreateTimePeriods(),
    ];

    protected items = this.itemsVariants[0]!;

    protected itemsHidden = false;

    protected strict = false;

    protected readonly modeVariants: readonly TuiTimeMode[] = [
        'HH:MM',
        'HH:MM AA',
        'HH:MM:SS',
        'HH:MM:SS AA',
        'HH:MM:SS.MSS',
        'HH:MM:SS.MSS AA',
        'MM:SS',
    ];

    protected mode = this.modeVariants[0]!;

    public override cleaner = false;

    public control = new FormControl(new TuiTime(15, 30), Validators.required);
}
