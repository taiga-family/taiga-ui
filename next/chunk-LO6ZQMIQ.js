import"./chunk-HU6DUUP4.js";var o=`import {DOCUMENT} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCardLarge, TuiDemo, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    private readonly doc = inject(DOCUMENT);

    protected readonly automatic = {
        Angular: 'ng add taiga-ui',
        Nx: import('./examples/nx-add.md'),
    };

    protected readonly libraries = {
        'Main packages': import('./examples/main.md'),
        'Addons (optional)': import('./examples/addons.md'),
    };

    protected readonly styles = {
        'angular.json': import('./examples/angular-json-styles.md'),
        'project.json (Nx)': import('./examples/project-json-styles.md'),
    };

    protected readonly icons = {
        'angular.json': import('./examples/assets.md'),
        'project.json (Nx)': import('./examples/nx-assets.md'),
    };

    protected readonly root = {
        'app.component.ts': import('./examples/app-standalone.md'),
        'app.component.html': import('./examples/app-template.md'),
    };

    protected readonly provide = {'main.ts': import('./examples/main-standalone.md')};

    protected readonly update = {
        Angular: 'ng update @taiga-ui/cdk',
        Nx: import('./examples/nx-migrate.md'),
    };

    protected toggle(section: string): void {
        this.doc
            .querySelector<HTMLElement>('[tuiDocHeader] > button:first-child')
            ?.click();

        setTimeout(() =>
            Array.from(this.doc.querySelectorAll('button'))
                .filter(({textContent}) => textContent?.trim() === section)
                .forEach((button) => {
                    const expand = button.nextElementSibling as HTMLElement | null;

                    button.click();
                    expand?.scrollIntoView({behavior: 'smooth', block: 'center'});
                }),
        );
    }
}
`;export{o as default};
