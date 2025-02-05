import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import type {TuiCellOptions} from '@taiga-ui/layout';
import {TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiCell, TuiDemo, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [tuiDocExampleOptionsProvider({fullsize: true})],
})
export default class Example {
    protected sizes = ['l', 'm', 's'] as const;
    protected size: TuiCellOptions['size'] = this.sizes[0];

    protected heights = ['normal', 'compact', 'spacious'] as const;
    protected height: TuiCellOptions['height'] = this.heights[0];

    protected readonly examples = [
        'Basic',
        'Label',
        'Left side',
        'Right side',
        'Long content',
        'Actions',
        'Combinations',
        'Connected',
        'Disabled state',
    ];
}
