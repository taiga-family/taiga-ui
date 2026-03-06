import {computed, Directive, inject} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {TuiInputSearch} from '@taiga-ui/layout/components/input-search';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';

@Directive({
    selector: 'input[tuiSearchHotkey]',
    host: {
        '[placeholder]': 'placeholder()',
        '(document:keydown.meta.k.stop)': 'search.open()',
        '(document:keydown.alt.k.stop)': 'search.open()',
    },
})
export class TuiSearchHotkey {
    readonly #platform = inject(WA_NAVIGATOR).platform;
    readonly #texts = inject(TUI_INPUT_SEARCH);

    protected readonly search = inject(TuiInputSearch);

    protected readonly placeholder = computed(({hotkey} = this.#texts()) =>
        this.#platform.startsWith('Mac') ? `⌘+K ${hotkey}` : `Alt+K ${hotkey}`,
    );
}
