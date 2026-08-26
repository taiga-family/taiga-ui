import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'input[tuiSearchBar]',
    template: '',
    styleUrl: './input-search-bar.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        autocomplete: 'off',
        autocorrect: 'off',
        spellcheck: 'false',
        type: 'search',
    },
})
export class TuiSearchbarInput {}
