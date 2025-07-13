import {inject, InjectionToken} from '@angular/core';
import type {TuiHandler} from '@taiga-ui/cdk/types';

import {
    TUI_ICON_FONT_RESOURCE_RESOLVER,
    TUI_ICON_IMAGE_RESOURCE_RESOLVER,
    TUI_ICON_IMAGE_DATA_RESOURCE_RESOLVER,
    TUI_ICON_SVG_RESOURCE_RESOLVER,
} from './icon-resource-resolver';

/**
 * TuiIconResource is needed to preserve the logic of adding
 * the 'url()' wrapper in resource resolvers, while satisfying the
 * needs of both components and TuiIconPipe.
 */
export interface TuiIconResource {
    path: string;
    src: string;
}

export interface TuiResolvedIconMode {
    className: string;
    resourceResolver: TuiHandler<string, TuiIconResource>;
}

export const TUI_ICON_MODE_RESOLVER = new InjectionToken<
    TuiHandler<string, TuiResolvedIconMode>
>(ngDevMode ? 'TUI_ICON_MODE_RESOLVER' : '', {
    factory: () => {
        const svgResourceResolver = inject(TUI_ICON_SVG_RESOURCE_RESOLVER);
        const imageResourceResolver = inject(TUI_ICON_IMAGE_RESOURCE_RESOLVER);
        const imageDataResourceResolver = inject(TUI_ICON_IMAGE_DATA_RESOURCE_RESOLVER);
        const fontResourceResolver = inject(TUI_ICON_FONT_RESOURCE_RESOLVER);

        return (icon): TuiResolvedIconMode => {
            if (icon.startsWith('@font')) {
                return {
                    className: 'tui-font-icon',
                    resourceResolver: fontResourceResolver,
                };
            }
            if (icon.startsWith('@image.')) {
                return {
                    className: icon.includes('.mask.')
                        ? 'tui-svg-icon'
                        : 'tui-image-icon',
                    resourceResolver: icon.includes('.data.')
                        ? imageDataResourceResolver
                        : imageResourceResolver,
                };
            }
            return {
                className: 'tui-svg-icon',
                resourceResolver: svgResourceResolver,
            };
        };
    },
});
