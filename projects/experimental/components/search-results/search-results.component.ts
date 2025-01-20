import {
    type KeyValue,
    KeyValuePipe,
    NgForOf,
    NgIf,
    NgTemplateOutlet,
} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    type OnChanges,
    TemplateRef,
} from '@angular/core';
import {TuiTabs} from '@taiga-ui/kit';
import {
    TuiIconPipe,
    TuiLoader,
    TuiScrollbar,
    TuiTextfieldComponent,
} from '@taiga-ui/core';
import {
    tuiClamp,
    type TuiContext,
    TuiFilterPipe,
    tuiInjectElement,
    TuiLet,
    tuiMoveFocus,
    tuiPure,
} from '@taiga-ui/cdk';
import {TUI_INPUT_SEARCH, TuiBlockStatus} from '@taiga-ui/layout';
import {toSignal} from '@angular/core/rxjs-interop';

import {TUI_SEARCH_RESULTS_OPTIONS} from './search-results.options';

@Component({
    standalone: true,
    selector: 'tui-search-results',
    styleUrls: ['./search-results.component.less'],
    templateUrl: './search-results.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf,
        NgForOf,
        NgTemplateOutlet,
        KeyValuePipe,
        TuiTabs,
        TuiScrollbar,
        TuiLoader,
        TuiBlockStatus,
        TuiIconPipe,
        TuiLet,
        TuiFilterPipe,
    ],
    host: {
        '(keydown.arrowDown.prevent)': 'onArrow($event.target, 1)',
        '(keydown.arrowUp.prevent)': 'onArrow($event.target, -1)',
    },
})
export class TuiSearchResultsComponent<T> implements OnChanges {
    private readonly el = tuiInjectElement();

    protected readonly options = inject(TUI_SEARCH_RESULTS_OPTIONS);
    protected readonly i18n = toSignal(inject(TUI_INPUT_SEARCH));
    protected readonly textfield = inject(TuiTextfieldComponent);
    protected active = 0;

    @ContentChild(TemplateRef)
    public readonly template?: TemplateRef<TuiContext<T>>;

    @Input()
    results: Record<string, readonly T[]> | null = {};

    public ngOnChanges(): void {
        this.active = 0;
    }

    @tuiPure
    protected isEmpty(results: Record<string, readonly T[]>): boolean {
        return !Object.values(results).reduce((total, {length}) => length + total, 0);
    }

    protected onArrow(current: HTMLElement, step: number): void {
        const elements = Array.from(this.el.querySelectorAll<HTMLElement>('[tuiCell]'));

        if (elements[0] === current && step < 0) {
            this.textfield.input?.nativeElement.focus();
        } else {
            tuiMoveFocus(elements.indexOf(current), elements, step);
        }
    }

    protected tab(step: number): void {
        this.active = tuiClamp(
            this.active + step,
            0,
            Object.keys(this.results || {}).length,
        );
        this.textfield.input?.nativeElement.focus();
    }

    protected notEmpty({value}: KeyValue<string, readonly T[]>): boolean {
        return !!value.length;
    }

    protected asIs(): number {
        return 0;
    }
}
