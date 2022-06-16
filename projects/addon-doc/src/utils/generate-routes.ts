import {Type} from '@angular/core';
import {Routes} from '@angular/router';

/**
 * Generates typical page routing structure
 */
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
