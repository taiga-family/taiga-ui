import type {Type} from '@angular/core';
import type {Routes} from '@angular/router';

export function tuiGenerateRoutes(type: Type<unknown>): Routes {
    return [
        {
            path: ``,
            component: type,
            children: [
                {
                    path: `:tab`,
                    component: type,
                },
            ],
        },
    ];
}
