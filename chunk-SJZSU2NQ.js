import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIcon} from '@taiga-ui/core';
import {TUI_PREVIEW_ICONS} from '@taiga-ui/kit';

@Component({
    imports: [TuiDemo, TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly used = Object.values(inject(TUI_PREVIEW_ICONS)); // compatibility with proprietary icons

    protected readonly iconVariants = [
        '@tui.info',
        '@tui.heart',
        ...this.used,
        'https://raw.githubusercontent.com/MarsiBarsi/readme-icons/main/github.svg',
        "\\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polygon points='1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6'/><line x1='8' y1='2' x2='8' y2='18'/><line x1='16' y1='6' x2='16' y2='22'/></svg>\\"",
        '',
    ];

    protected readonly backgroundVariants = [
        '',
        '@tui.info-filled',
        '@tui.heart-filled',
        ...new Set(
            this.used.map((icon) => (icon.includes('filled') ? icon : \`\${icon}-filled\`)),
        ),
    ];

    protected readonly examples = [
        'Basic',
        'Parameters',
        'Features',
        'Bundled',
        'Resolver',
        'External',
    ];

    protected icon = '@tui.heart';
    protected background = '';
    protected badge = '';
}
`;export{i as default};
