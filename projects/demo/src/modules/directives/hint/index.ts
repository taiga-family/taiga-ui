import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiHint, TuiLinkDirective, TuiNotificationComponent} from '@taiga-ui/core';

import {AbstractExampleTuiHint} from '../../components/abstract/hint';
import {ABSTRACT_PROPS_ACCESSOR} from '../../components/abstract/inherited-documentation/abstract-props-accessor';
import {InheritedDocumentationModule} from '../../components/abstract/inherited-documentation/inherited-documentation.module';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiLinkDirective,
        RouterLink,
        TuiHint,
        InheritedDocumentationModule,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiHint {
    protected showDelay = 500;
    protected hideDelay = 200;
}
