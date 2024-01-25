import 'jest-preset-angular/setup-jest';
import '@ng-web-apis/universal/mocks';
import '@taiga-ui/testing/setup-jest';

import {tuiSwitchNgDevMode} from '@taiga-ui/testing';

// TODO: Remove when updated to ng-web-apis 4
(global as any).ResizeObserver = class {
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
};

tuiSwitchNgDevMode(false);
