import {NgIf} from '@angular/common';
import type {OnChanges, QueryList, SimpleChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChildren,
    EventEmitter,
    forwardRef,
    inject,
    Input,
    Output,
    signal,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';

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
    providers: [
        TUI_TABLE_PROVIDER,
        {provide: TuiTableTbody, useExisting: forwardRef(() => TuiTableTbodyNew)},
    ],
})
export class TuiTableTbodyNew<T extends Partial<Record<keyof T, any>>>
    implements OnChanges
{
    private readonly options = inject(TUI_TABLE_OPTIONS);
    private readonly el = tuiInjectElement();
    private readonly animationSpeed = inject(TUI_ANIMATIONS_SPEED);

    protected readonly contentHeight = signal<number | null>(null);
    protected readonly transitioning = signal(false);
    protected readonly showContent = computed(() => {
        const contentHeight = this.contentHeight();
        const open = this.open();
        const transitioning = this.transitioning();

        return contentHeight ? open && !transitioning : true;
    });

    @ContentChildren(forwardRef(() => TuiTableTr))
    public readonly rows: QueryList<TuiTableTr<T>> = EMPTY_QUERY;

    @Input()
    public data: readonly T[] = [];

    @Output()
    public readonly openChange = new EventEmitter<boolean>();

    public readonly open = signal(this.options.open);

    constructor() {
        this.updateContentHeight(this.el);
    }

    @Input('open')
    public set openSetter(open: boolean) {
        this.open.set(open);
        this.transitioning.set(true);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && !changes.data.firstChange) {
            this.updateContentHeight(this.el);
        }
    }

    public toggle(): void {
        this.open.set(!this.open());
        this.transitioning.set(true);
        this.openChange.emit(this.open());
    }

    private updateContentHeight(el: HTMLElement): void {
        this.el.style.setProperty('animation-iteration-count', '0');
        this.contentHeight.set(null);

        requestAnimationFrame(() => {
            const fullElHeight = el.getBoundingClientRect().height;
            const headingHeight = el
                .querySelector('[tuiTableExpandHeading]')
                ?.getBoundingClientRect().height;

            this.contentHeight.set(headingHeight ? fullElHeight - headingHeight : null);

            setTimeout(
                () => this.el.style.removeProperty('animation-iteration-count'),
                tuiGetDuration(this.animationSpeed),
            );
        });
    }
}
