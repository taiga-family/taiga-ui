import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiButton, TuiHint} from '@taiga-ui/core';

import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/abstract-props-accessor';
import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {InheritedDocumentationComponent} from '../../components/abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiButton, TuiHint, InheritedDocumentationComponent],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiHint {
    protected show = false;

    protected sayHi(): void {
        console.info('Hi all!');
    }
}
