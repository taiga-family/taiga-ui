import {animateChild, query, transition, trigger} from '@angular/animations';

export const TUI_PARENT_ANIMATION = trigger(`tuiParentAnimation`, [
    transition(`:leave`, [query(`@*`, [animateChild()], {optional: true})]),
]);
