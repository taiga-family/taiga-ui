import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiProvide} from '@taiga-ui/cdk';
import {TuiIcon, type TuiSizeS} from '@taiga-ui/core';
import {TuiTooltip} from '@taiga-ui/kit';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiHint} from '../abstract/hint';
import {InheritedDocumentation} from '../abstract/inherited-documentation';

@Component({
    standalone: true,
    imports: [InheritedDocumentation, TuiDemo, TuiIcon, TuiTooltip],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent)],
})
export default class PageComponent extends AbstractExampleTuiHint {
    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];
    protected size: TuiSizeS = 'm';
    protected content = 'Tooltip text';
}
