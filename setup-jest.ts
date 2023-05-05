import 'jest-preset-angular/setup-jest';
import '@ng-web-apis/universal/mocks';
import '@taiga-ui/testing/setup-jest';

import {tuiSwitchNgDevMode} from '@taiga-ui/testing';

tuiSwitchNgDevMode(false);
