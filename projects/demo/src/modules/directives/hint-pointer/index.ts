import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiHintDirective, TuiHintPointerDirective} from '@taiga-ui/core';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiHintPointerDirective,
        TuiHintDirective,
        InheritedDocumentationModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiHint {
    protected showDelay = 0;
    protected hideDelay = 0;
}
