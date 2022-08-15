import {animateChild, query, style, transition, trigger} from '@angular/animations';

export const TUI_PARENT_ANIMATION = trigger(`tuiParentAnimation`, [
    transition(`* => void`, [
        style({overflow: `hidden`}),
        query(`:scope > *`, [animateChild()], {optional: true}),
    ]),
]);
