import {AnimationBuilder} from '@angular/animations';
import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    ElementRef,
    EventEmitter,
    forwardRef,
    inject,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {skip} from 'rxjs';

import {TuiTableDirective} from '../../directives/table.directive';
import {TUI_TABLE_OPTIONS} from '../../table.options';
import {TuiTableTbody} from '../tbody.component';
import {
    expandTableBodyCloseAnimationData,
    expandTableBodyOpenAnimationData,
} from './expand-table-body-animation-data';

@Component({
    standalone: true,
    selector: 'expandable-table-row-filler',
    templateUrl: './expandable-table-row-filler.component.html',
    styleUrls: ['./expandable-table-row-filler.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpandableTableRowFillerComponent<T> implements OnInit {
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly builder = inject(AnimationBuilder);
    private readonly el = inject(ElementRef);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly parentBody = inject<TuiTableTbody<T>>(
        forwardRef(() => TuiTableTbody),
    );

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );

    @Output()
    public readonly animationStart = new EventEmitter();

    @Output()
    public readonly animationDone = new EventEmitter();

    public ngOnInit(): void {
        this.parentBody.open$
            .pipe(skip(1), takeUntilDestroyed(this.destroyRef))
            .subscribe((opened) => {
                const rowsCount = this.parentBody.data.length;

                const metadata = opened
                    ? expandTableBodyOpenAnimationData(
                          rowsCount,
                          this.table.size(),
                          this.options.expandTime,
                      )
                    : expandTableBodyCloseAnimationData(
                          rowsCount,
                          this.table.size(),
                          this.options.expandTime,
                      );

                const factory = this.builder.build(metadata);
                const player = factory.create(this.el.nativeElement);

                player.onStart(() => this.animationStart.emit());
                player.onDone(() => this.animationDone.emit());

                player.play();
            });
    }
}
