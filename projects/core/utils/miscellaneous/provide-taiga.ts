import type {Provider} from '@angular/core';
import {tuiScrollbarOptionsProvider} from '@taiga-ui/core/components/scrollbar';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

import {tuiEnableFontScaling} from './font-scaling';

interface Options {
    fontScaling: boolean;
    eventPlugins: boolean;
    customGlobalScrollbar: boolean;
}

const DEFAULT: Options = {
    fontScaling: true,
    eventPlugins: true,
    customGlobalScrollbar: false,
};

export function provideTaiga(options: Partial<Options> = {}): Provider[] {
    const {fontScaling, eventPlugins, customGlobalScrollbar} = {
        ...DEFAULT,
        ...options,
    };

    return [
        ...(fontScaling ? [tuiEnableFontScaling()] : []),
        ...(eventPlugins ? [provideEventPlugins()] : []),
        ...(customGlobalScrollbar ? [tuiScrollbarOptionsProvider({mode: 'native'})] : []),
    ];
}
