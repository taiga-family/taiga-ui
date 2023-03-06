import {inject, InjectionToken, Renderer2, RendererFactory2} from '@angular/core';

/**
 * A Renderer2 for global services
 * https://github.com/angular/angular/issues/17824#issuecomment-353239017
 * @deprecated unnecessary
 * TODO: remove in 4.0
 */
export const TUI_DEFAULT_RENDERER = new InjectionToken<Renderer2>(
    `[TUI_DEFAULT_RENDERER]`,
    {
        // @ts-ignore
        factory: () => inject(RendererFactory2).createRenderer(null, null),
    },
);
