import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiKitIcons} from '@taiga-ui/icons';

@Component({
    selector: 'icons-mapping',
    templateUrl: './icons-mapping.template.html',
    styleUrls: ['./icons-mapping.style.less'],
    changeDetection,
})
export class IconsMappingComponent {
    protected readonly options = import('./examples/4/app.module.md?raw');

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        './assets/icons/keyboard_arrow_right-24px.svg': import(
            '../../../assets/icons/keyboard_arrow_right-24px.svg?raw'
        ),
    };

    protected readonly example2: TuiDocExample = {
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        'process-icons.js': import('./examples/2/process-icons.js.md?raw'),
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        'process-icons.ts': import('./examples/2/process-icons.ts.md?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
        // eslint-disable-next-line @taiga-ui/experience/strict-tui-doc-example
        './assets/icons/polygon.svg': import('../../../assets/icons/polygon.svg?raw'),
    };

    protected readonly names = Object.keys(tuiKitIcons);

    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
