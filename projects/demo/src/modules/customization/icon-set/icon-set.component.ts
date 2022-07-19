import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiKitIcons} from '@taiga-ui/icons';

@Component({
    selector: 'icon-set',
    templateUrl: './icon-set.template.html',
    styleUrls: ['./icon-set.style.less'],
    changeDetection,
})
export class IconSetComponent {
    readonly exampleSanitizer = import('!!raw-loader!./examples/sanitizer/sanitizer.md');

    readonly example1 = {
        'process-icons.js': import('!!raw-loader!./examples/1/process-icons.js.md'),
        'process-icons.ts': import('!!raw-loader!./examples/1/process-icons.ts.md'),
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly names = Object.keys(tuiKitIcons);

    expanded = false;

    toggle(): void {
        this.expanded = !this.expanded;
    }
}
