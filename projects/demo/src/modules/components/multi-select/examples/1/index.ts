import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';

const ITEMS: readonly string[] = [
    'Luke Skywalker',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
];

@Component({
    selector: 'tui-multi-select-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiMultiSelectExample1 {
    protected search: string | null = '';

    protected readonly control = new FormControl([ITEMS[0]]);

    @tuiPure
    protected filter(search: string | null): readonly string[] {
        return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
    }

    protected tagValidator: TuiBooleanHandler<string> = tag => !tag.startsWith('Han');
}
