import {AnimationBuilder} from '@angular/animations';
import {
    ChangeDetectionStrategy,
    Component,
    effect,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
    Output,
} from '@angular/core';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';

import {TuiTableDirective} from '../../directives/table.directive';
import {TuiTableTbodyNew} from '../tbody-new.component';
import {
    expandTableBodyCloseAnimationData,
    expandTableBodyOpenAnimationData,
} from './expand-table-body-animation-data';

@Component({
    standalone: true,
    selector: 'expandable-table-row-filler',
    template: '',
    styleUrls: ['./expandable-table-row-filler.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandableTableRowFillerComponent<T> {
    private readonly animationSpeed = inject(TUI_ANIMATIONS_SPEED);
    private readonly builder = inject(AnimationBuilder);
    private readonly el = inject(ElementRef);

    protected readonly parentBody = inject<TuiTableTbodyNew<T>>(
        forwardRef(() => TuiTableTbodyNew),
    );

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    @Output()
    public readonly animationStart = new EventEmitter();

    @Output()
    public readonly animationDone = new EventEmitter();

    constructor() {
        const expandTime = tuiGetDuration(this.animationSpeed);

        effect(() => {
            const opened = this.parentBody['openSignal']();
            const showExpandableContent = this.parentBody['showExpandableContent']();
            const rowsCount = this.parentBody.data.length;

            // animation should only occur when "open" was already changed, but real content appearance did not changed yet
            if (showExpandableContent === opened) {
                return;
            }

            const metadata = opened
                ? expandTableBodyOpenAnimationData(
                      rowsCount,
                      this.table.size(),
                      expandTime,
                  )
                : expandTableBodyCloseAnimationData(
                      rowsCount,
                      this.table.size(),
                      expandTime,
                  );

            const factory = this.builder.build(metadata);
            const player = factory.create(this.el.nativeElement);

            player.onStart(() => this.animationStart.emit());
            player.onDone(() => this.animationDone.emit());

            player.play();
        });
    }
}
