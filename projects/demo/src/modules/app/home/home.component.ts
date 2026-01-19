import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';
import {TuiTabs} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    selector: 'demo-home',
    imports: [TuiDemo, TuiHeader, TuiTabs, TuiTitle],
    templateUrl: './home.template.html',
    styleUrl: './home.style.less',
    encapsulation,
    changeDetection,
})
export class Home {
    protected readonly angularJsonStyles = import('./examples/angular-json-styles.md');
    protected readonly projectJsonStyles = import('./examples/project-json-styles.md');
    protected readonly appTemplate = import('./examples/app-template.md');
    protected readonly assets = import('./examples/assets.md');
    protected readonly nxAssets = import('./examples/nx-assets.md');
    protected readonly componentsStyles = import('./examples/components-styles.md');
    protected readonly importLocalLess = import('./examples/import-local-less.md');
    protected readonly main = import('./examples/main.md');
    protected readonly addons = import('./examples/addons.md');
    protected readonly nxAdd = import('./examples/nx-add.md');
    protected readonly nxMigrate = import('./examples/nx-migrate.md');
    protected readonly standalone = import('./examples/app-standalone.md');
    protected readonly standaloneMain = import('./examples/main-standalone.md');
}
