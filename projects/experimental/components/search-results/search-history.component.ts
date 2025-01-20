import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TUI_CLOSE_WORD, TuiButton, TuiTextfieldComponent, TuiTitle} from '@taiga-ui/core';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {NgControl} from '@angular/forms';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs';
import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {TuiCell} from '@taiga-ui/layout/components/cell';
import {TuiAvatar} from '@taiga-ui/kit';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';

import {TUI_SEARCH_RESULTS_OPTIONS} from './search-results.options';

@Component({
    standalone: true,
    selector: 'tui-search-history',
    styles: [
        `
            :host:not(:empty) {
                display: block;
                padding: 0.325rem 0;
            }
        `,
    ],
    templateUrl: './search-history.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, NgForOf, NgTemplateOutlet, TuiCell, TuiAvatar, TuiTitle, TuiButton],
})
export class TuiSearchHistory {
    private readonly textfield = inject(TuiTextfieldComponent);
    private readonly storage = inject(WA_LOCAL_STORAGE);
    private readonly control = inject(NgControl);

    protected readonly close = toSignal(inject(TUI_CLOSE_WORD));
    protected readonly i18n = toSignal(inject(TUI_INPUT_SEARCH));
    protected readonly options = inject(TUI_SEARCH_RESULTS_OPTIONS);
    protected readonly $ = this.control.valueChanges
        ?.pipe(
            map(String),
            filter((item) => !!item && !this.popular.includes(item)),
            takeUntilDestroyed(),
        )
        .subscribe((value) => {
            this.store(value);
        });

    protected history = this.items;

    @Input()
    popular: readonly string[] = [];

    protected store(item: string): void {
        this.storage.setItem(
            this.options.key,
            JSON.stringify(
                Array.from(new Set([item.trim(), ...this.items]))
                    .filter((v, _, a) => v && !a.find((s) => s.startsWith(v) && s !== v))
                    .slice(0, 5),
            ),
        );
    }

    protected remove(item: string): void {
        this.textfield.input?.nativeElement.focus();
        this.history = this.history.filter((v) => v !== item);
        this.storage.setItem(
            this.options.key,
            JSON.stringify(this.items.filter((v) => v !== item)),
        );
    }

    protected select(item: string): void {
        this.control.control?.setValue(item);
        this.textfield.input?.nativeElement.focus();
    }

    private get items(): readonly string[] {
        return JSON.parse(this.storage.getItem(this.options.key) || '[]');
    }
}
