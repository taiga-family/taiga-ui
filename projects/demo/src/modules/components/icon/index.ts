import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_USED_ICONS} from '@taiga-ui/cdk';
import {TuiIcon} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiIcon],
    templateUrl: './index.html',
    changeDetection,
    providers: [tuiInputNumberOptionsProvider({min: 0})],
})
export default class Page {
    protected readonly iconVariants = ['', ...TUI_USED_ICONS];
    protected readonly colorVariants = ['', 'var(--tui-text-primary)', 'red', '#3aa981'];

    protected readonly examples = [
        {name: 'Basic', content: 'html,ts,less'},
        {name: 'External', content: 'html,ts,less'},
        {name: 'Two colors', content: 'html,ts'},
        {name: 'Bundled', content: 'html,ts,less'},
        {name: 'Resolver', content: 'html,ts,less'},
    ] as const;

    protected readonly descriptions = [
        '',
        '',
        '',
        'You can provide SVG source code in a dictionary to be bundled with the app, for example on the server side so they are loaded immediately with the page',
        'IMPORTANT: Icon names are not allowed to have "/" symbol',
    ];

    protected icon = '@tui.heart';
    protected backgroundIcon = '';
    protected color = this.colorVariants[1]!;
    protected backgroundColor = '';
    protected size = 24;
}
