import {
    ChangeDetectionStrategy,
    Component,
    contentChildren,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiExpand} from '@taiga-ui/core/components/expand';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import {type TuiSizeL, type TuiSizeS} from '@taiga-ui/core/types';

import {TuiAccordionDirective} from './accordion.directive';

@Component({
    selector: 'tui-accordion',
    template: '<ng-content />',
    styleUrl: './accordion.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiGroupOptionsProvider({orientation: 'vertical', collapsed: true})],
    hostDirectives: [TuiGroup],
    host: {'[attr.data-size]': 'size()'},
})
export class TuiAccordionComponent {
    protected readonly expands = contentChildren(TuiExpand);
    protected readonly directives = contentChildren(TuiAccordionDirective);

    public readonly closeOthers = input(true);
    public readonly size = input<TuiSizeL | TuiSizeS>('l');

    public toggle(directive: TuiAccordionDirective): void {
        if (this.closeOthers() && directive.open()) {
            this.expands().forEach((expand) => tuiSetSignal(expand.expanded, false));
            this.directives().forEach((dir) => {
                if (dir !== directive) {
                    dir.open.set(false);
                }
            });
        }

        const expand = this.expands()[this.directives().indexOf(directive)];

        if (expand) {
            tuiSetSignal(expand.expanded, !!directive.open());
        }
    }
}
