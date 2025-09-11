import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly jestConfig = import('./examples/jest-config.md?raw');
    protected readonly packageJson = import('./examples/package-json.md?raw');
    protected readonly setupJest = import('./examples/setup-jest.md?raw');
}
