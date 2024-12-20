import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiDocNumberFormat} from '@demo/components/number-format';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiHint, TuiNumberFormat} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiControl} from '../abstract/control';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        InheritedDocumentation,
        ReactiveFormsModule,
        TuiDemo,
        TuiDocNumberFormat,
        TuiHint,
        TuiInputNumberModule,
        TuiNumberFormat,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiControl {
    protected readonly routes = DemoRoute;
    protected docPages = DemoRoute;

    protected readonly minVariants: readonly number[] = [-Infinity, -500, 5, 25];

    protected min = this.minVariants[0]!;

    protected readonly maxVariants: readonly number[] = [Infinity, 10, 500];

    protected max = this.maxVariants[0]!;

    protected step = 0;

    public override cleaner = false;
    public readonly control = new FormControl(6432, Validators.required);
}
