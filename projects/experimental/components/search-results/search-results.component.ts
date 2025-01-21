import type {KeyValue} from '@angular/common';
import {KeyValuePipe, NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    inject,
    Input,
    TemplateRef,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiFilterPipe} from '@taiga-ui/cdk/pipes/filter';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiIconPipe} from '@taiga-ui/core/components/icon';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TuiTabs} from '@taiga-ui/kit/components/tabs';
import {TuiBlockStatus} from '@taiga-ui/layout/components/block-status';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';

import {TUI_SEARCH_RESULTS_OPTIONS} from './search-results.options';

@Component({
    standalone: true,
    selector: 'tui-search-results',
    imports: [
        KeyValuePipe,
        NgForOf,
        NgIf,
        NgTemplateOutlet,
        TuiBlockStatus,
        TuiFilterPipe,
        TuiIconPipe,
        TuiLet,
        TuiLoader,
        TuiScrollbar,
        TuiTabs,
    ],
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    public results: Record<string, readonly T[]> | null = {};

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
