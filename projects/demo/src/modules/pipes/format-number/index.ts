import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiFormatNumberPipe, TuiLink} from '@taiga-ui/core';
import {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiNumberFormat} from '../../components/abstract/number-format';
import {NumberFormatDocumentationComponent} from '../../components/abstract/number-format-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiFormatNumberPipe,
        TuiInputNumberModule,
        TuiTextfieldControllerModule,
        ReactiveFormsModule,
        NumberFormatDocumentationComponent,
        RouterLink,
        TuiLink,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiNumberFormat {
    protected readonly routes = DemoRoute;
    public readonly control = new FormControl(100);
}
