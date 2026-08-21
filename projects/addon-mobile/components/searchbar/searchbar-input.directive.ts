import {Directive} from '@angular/core';

@Directive({
    selector: 'input[tuiSearch]',
    host: {
        autocomplete: 'off',
        autocorrect: 'off',
        spellcheck: 'false',
        type: 'search',
    },
})
export class TuiSearchbarInput {}
