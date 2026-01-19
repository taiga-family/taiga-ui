import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
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

    protected readonly provide = {
        'main.ts': import('./examples/main-standalone.md'),
    };

    protected readonly update = {
        Angular: 'ng update @taiga-ui/cdk',
        Nx: import('./examples/nx-migrate.md'),
    };
}
