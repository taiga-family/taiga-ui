import {NgIf} from '@angular/common';
import {computed, type QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    signal,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';

import {TUI_TABLE_PROVIDER} from '../providers/table.provider';
import {TUI_TABLE_OPTIONS} from '../table.options';
import {TuiTableTbody} from '../tbody/tbody.component';
import {TuiTableTr} from '../tr/tr.component';

@Component({
    standalone: true,
    selector: 'tbody[tuiTbody]:not([heading])',
    imports: [NgIf],
    templateUrl: './tbody-new.template.html',
    styleUrls: ['./tbody-new.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {style: 'animation-iteration-count: 0'},
    providers: [
        TUI_TABLE_PROVIDER,
        {provide: TuiTableTbody, useExisting: forwardRef(() => TuiTableTbodyNew)},
    ],
})
export class TuiTableTbodyNew<T extends Partial<Record<keyof T, any>>> {
    private readonly options = inject(TUI_TABLE_OPTIONS);

    protected readonly height = computed((_ = this.open()) => this.data.length * 3.5);
    protected readonly transitioning = signal(false);

    @ContentChildren(forwardRef(() => TuiTableTr))
    public readonly rows: QueryList<TuiTableTr<T>> = EMPTY_QUERY;

    @Input()
    public data: readonly T[] = [];

    @Input('open')
    set openSetter(open: boolean) {
        this.open.set(open);
        this.transitioning.set(true);
    }

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    public readonly open = signal(this.options.open);

    constructor() {
        const el = tuiInjectElement();

        setTimeout(() => el.style.removeProperty('animation-iteration-count'), 1000);
    }

    public toggle(): void {
        this.open.set(!this.open());
        this.transitioning.set(true);
        this.openChange.emit(this.open());
    }
}
