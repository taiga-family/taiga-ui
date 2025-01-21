import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {WA_LOCAL_STORAGE} from '@ng-web-apis/common';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiTextfieldComponent} from '@taiga-ui/core/components/textfield';
import {TuiTitle} from '@taiga-ui/core/directives/title';
import {TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';
import {TuiAvatar} from '@taiga-ui/kit/components/avatar';
import {TuiCell} from '@taiga-ui/layout/components/cell';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';
import {filter, map} from 'rxjs';

import {TUI_SEARCH_RESULTS_OPTIONS} from './search-results.options';

@Component({
    standalone: true,
    selector: 'tui-search-history',
    imports: [NgForOf, NgIf, NgTemplateOutlet, TuiAvatar, TuiButton, TuiCell, TuiTitle],
    templateUrl: './search-history.component.html',
    styles: [
        `
            :host:not(:empty) {
                display: block;
                padding: 0.325rem 0;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
    public popular: readonly string[] = [];

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
