import {inject, InjectionToken, Renderer2, RendererFactory2} from '@angular/core';

// https://github.com/angular/angular/issues/17824#issuecomment-353239017
export const TUI_DEFAULT_RENDERER = new InjectionToken<Renderer2>(
    `[TUI_DEFAULT_RENDERER]: A Renderer2 for global services`,
    {
        // @ts-ignore
        factory: () => inject(RendererFactory2).createRenderer(null, null),
    },
);
