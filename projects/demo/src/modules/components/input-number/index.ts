import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {
    TuiHintOptionsDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiNumberFormatDirective,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputNumberModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
import {AbstractExampleTuiNumberFormat} from '../abstract/number-format';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        RouterLink,
        TuiNotificationComponent,
        TuiInputNumberModule,
        ReactiveFormsModule,
        TuiHintOptionsDirective,
        TuiNumberFormatDirective,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiNumberFormat {
    protected docPages = DemoRoute;

    protected readonly minVariants: readonly number[] = [-Infinity, -500, 5, 25];

    protected min = this.minVariants[0];

    protected readonly maxVariants: readonly number[] = [Infinity, 10, 500];

    protected max = this.maxVariants[0];

    protected step = 0;

    public override cleaner = false;
    public override precision = 2;
    public readonly control = new FormControl(6432, Validators.required);
}
