import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WA_NAVIGATOR} from '@ng-web-apis/common';
import {TuiInputSearch} from '@taiga-ui/layout/components/input-search';
import {TUI_INPUT_SEARCH} from '@taiga-ui/layout/tokens';
import {map} from 'rxjs';

@Directive({
    standalone: true,
    selector: 'input[tuiSearchHotkey]',
    host: {
        '[placeholder]': 'placeholder()',
        '(document:keydown.meta.k.stop)': 'search.open()',
        '(document:keydown.alt.k.stop)': 'search.open()',
    },
})
export class TuiSearchHotkey {
    private readonly platform = inject(WA_NAVIGATOR).platform;

    protected readonly search = inject(TuiInputSearch);
    protected readonly placeholder = toSignal(
        inject(TUI_INPUT_SEARCH).pipe(
            map(({hotkey}) =>
                this.platform.startsWith('Mac') ? `⌘+K ${hotkey}` : `Alt+K ${hotkey}`,
            ),
        ),
    );
}
