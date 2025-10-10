import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiTabs} from '@taiga-ui/kit';

@Component({
    selector: 'demo-home',
    imports: [TuiDemo, TuiTabs],
    templateUrl: './home.template.html',
    styleUrl: './home.style.less',
    encapsulation,
    changeDetection,
})
export class Home {
    protected readonly angularJsonStyles = import(
        './examples/angular-json-styles.md?raw'
    );

    protected readonly projectJsonStyles = import(
        './examples/project-json-styles.md?raw'
    );

    protected readonly appTemplate = import('./examples/app-template.md?raw');
    protected readonly assets = import('./examples/assets.md?raw');
    protected readonly nxAssets = import('./examples/nx-assets.md?raw');
    protected readonly componentsStyles = import('./examples/components-styles.md?raw');
    protected readonly importLocalLess = import('./examples/import-local-less.md?raw');
    protected readonly main = import('./examples/main.md?raw');
    protected readonly addons = import('./examples/addons.md?raw');
    protected readonly nxAdd = import('./examples/nx-add.md?raw');
    protected readonly nxMigrate = import('./examples/nx-migrate.md?raw');
    protected readonly standalone = import('./examples/app-standalone.md?raw');
    protected readonly standaloneMain = import('./examples/main-standalone.md?raw');
}
