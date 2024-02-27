import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocCodeModule, TuiDocPageModule} from '@taiga-ui/addon-doc';

@Component({
    standalone: true,
    selector: 'jest',
    imports: [TuiDocPageModule, TuiDocCodeModule],
    templateUrl: './jest.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class JestComponent {
    protected readonly jestConfigJs = import('./examples/jest-config-js.md?raw');
    protected readonly packageJson = import('./examples/package-json.md?raw');
    protected readonly setupJestJs = import('./examples/setup-jest-js.md?raw');
}
