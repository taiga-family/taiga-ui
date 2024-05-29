import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiHintDirective, TuiHintPointerDirective} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {InheritedDocumentationComponent} from '../../components/abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiHintPointerDirective,
        TuiHintDirective,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiHint {
    protected showDelay = 0;
    protected hideDelay = 0;
}
