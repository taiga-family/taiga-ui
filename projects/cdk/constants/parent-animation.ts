import {animateChild, query, style, transition, trigger} from '@angular/animations';

export const TUI_PARENT_ANIMATION = trigger('tuiParentAnimation', [
    transition(':enter', [
        style({overflow: 'hidden'}),
        query('@*', [animateChild()], {optional: true}),
    ]),
    transition(':leave', [
        style({overflow: 'hidden'}),
        query('@*', [animateChild()], {optional: true}),
    ]),
]);
