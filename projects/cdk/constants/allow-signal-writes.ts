import type {CreateEffectOptions} from '@angular/core';
import {VERSION} from '@angular/core';

export const TUI_ALLOW_SIGNAL_WRITES: CreateEffectOptions =
    parseInt(VERSION.major, 10) >= 19 ? {} : {allowSignalWrites: true};
