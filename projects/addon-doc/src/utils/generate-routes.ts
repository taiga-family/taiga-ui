import {Type} from '@angular/core';
import {Routes} from '@angular/router';

/**
 * @deprecated: use {@link tuiGenerateRoutes} instead
 * Generates typical page routing structure
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function generateRoutes(type: Type<unknown>): Routes {
    return [
        {
            path: '',
            component: type,
            children: [
                {
                    path: ':tab',
                    component: type,
                },
            ],
        },
    ];
}

export const tuiGenerateRoutes = generateRoutes;
