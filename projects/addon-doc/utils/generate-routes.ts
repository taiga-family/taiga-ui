import {Type} from '@angular/core';
import {Routes} from '@angular/router';

export function tuiGenerateRoutes(type: Type<unknown>): Routes {
    return [
        {
            children: [
                {
                    component: type,
                    path: `:tab`,
                },
            ],
            component: type,
            path: ``,
        },
    ];
}
