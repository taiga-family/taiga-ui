import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Input,
    type QueryList,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk';
import {
    TuiGroup,
    tuiGroupOptionsProvider,
    type TuiSizeL,
    type TuiSizeS,
} from '@taiga-ui/core';
import {TuiExpand} from '@taiga-ui/experimental/components/expand';

import {TuiAccordionDirective} from './accordion.directive';

@Component({
    standalone: true,
    selector: 'tui-accordion',
    template: '<ng-content />',
    styleUrls: ['./accordion.style.less'],
    providers: [
        tuiGroupOptionsProvider({
            orientation: 'vertical',
            collapsed: true,
        }),
    ],
    hostDirectives: [TuiGroup],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiAccordionComponent {
    @ContentChildren(TuiExpand, {static: true} as any)
    public readonly expands: QueryList<TuiExpand> = EMPTY_QUERY;

    @ContentChildren(TuiAccordionDirective, {static: true} as any)
    public readonly directives: QueryList<TuiAccordionDirective> = EMPTY_QUERY;

    public readonly size = signal<TuiSizeS | TuiSizeL>('l');

    @Input('size')
    set sizeSetter(size: TuiSizeS | TuiSizeL) {
        this.size.set(size);
    }

    @Input()
    public closeOthers = true;

    toggle(directive: TuiAccordionDirective, value: boolean): void {
        if (this.closeOthers && value) {
            this.expands.forEach((expand) => (expand.expanded = false));
            this.directives.forEach((dir) => {
                if (dir === directive) {
                    return;
                }

                dir.open.set(false);
                dir.tuiAccordionChange.emit(false);
            });
        }

        this.expands.get(this.directives.toArray().indexOf(directive))!.expanded = value;
    }
}
