import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    Input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiGroup, tuiGroupOptionsProvider} from '@taiga-ui/core/directives/group';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {TuiExpand} from '@taiga-ui/experimental/components/expand';

import {TuiAccordionDirective} from './accordion.directive';

@Component({
    standalone: true,
    selector: 'tui-accordion',
    template: '<ng-content />',
    styleUrls: ['./accordion.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiGroupOptionsProvider({
            orientation: 'vertical',
            collapsed: true,
        }),
    ],
    hostDirectives: [TuiGroup],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiAccordionComponent {
    @ContentChildren(TuiExpand, {static: true} as any)
    public readonly expands: QueryList<TuiExpand> = EMPTY_QUERY;

    @ContentChildren(TuiAccordionDirective, {static: true} as any)
    public readonly directives: QueryList<TuiAccordionDirective> = EMPTY_QUERY;

    @Input()
    public closeOthers = true;

    public readonly size = signal<TuiSizeL | TuiSizeS>('l');

    @Input('size')
    public set sizeSetter(size: TuiSizeL | TuiSizeS) {
        this.size.set(size);
    }

    public toggle(directive: TuiAccordionDirective, value: boolean): void {
        if (this.closeOthers && value) {
            this.expands.forEach((expand) => {
                expand.expanded = false;
            });

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
