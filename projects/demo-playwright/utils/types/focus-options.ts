import {type Locator} from '@playwright/test';

export type FocusOptions = Parameters<Locator['focus']>[0];
