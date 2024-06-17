import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';

@Component({
    standalone: true,
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly jestConfigJs = import('./examples/jest-config-js.md?raw');
    protected readonly packageJson = import('./examples/package-json.md?raw');
    protected readonly setupJestJs = import('./examples/setup-jest-js.md?raw');
}
