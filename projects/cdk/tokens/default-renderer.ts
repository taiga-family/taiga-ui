import type {Renderer2} from '@angular/core';
import {inject, RendererFactory2} from '@angular/core';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

/**
 * A Renderer2 for global services
 * https://github.com/angular/angular/issues/17824#issuecomment-353239017
 * @deprecated unnecessary
 * TODO: remove in 4.0
 */
export const TUI_DEFAULT_RENDERER = tuiCreateTokenFromFactory<Renderer2>(
    // @ts-ignore
    () => inject(RendererFactory2).createRenderer(null, null),
);
