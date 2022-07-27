import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {tuiKitIcons} from '@taiga-ui/icons';

@Component({
    selector: `icon-set`,
    templateUrl: `./icon-set.template.html`,
    styleUrls: [`./icon-set.style.less`],
    changeDetection,
})
export class IconSetComponent {
    readonly exampleSanitizer = import(`./examples/sanitizer/sanitizer.md?raw`);

    readonly example1 = {
        'process-icons.js': import(`./examples/1/process-icons.js.md?raw`),
        'process-icons.ts': import(`./examples/1/process-icons.ts.md?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly names = Object.keys(tuiKitIcons);

    expanded = false;

    toggle(): void {
        this.expanded = !this.expanded;
    }
}
