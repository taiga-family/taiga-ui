import {Locator} from '@playwright/test';

export type ClickOptions = Parameters<Locator['click']>[0];
