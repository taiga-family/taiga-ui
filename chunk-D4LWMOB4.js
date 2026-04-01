import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExampleOptionsProvider} from '@taiga-ui/addon-doc';
import {TuiCell, type TuiCellOptions, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    imports: [TuiAvatar, TuiCell, TuiDemo, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
`;export{i as default};
