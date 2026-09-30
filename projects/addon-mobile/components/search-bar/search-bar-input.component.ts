import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'input[tuiSearchBar]',
    template: '',
    styleUrls: ['./search-bar-input.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        autocomplete: 'off',
        autocorrect: 'off',
        spellcheck: 'false',
        type: 'search',
    },
})
export class TuiSearchBarInput {}
