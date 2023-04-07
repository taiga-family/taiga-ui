import {animateChild, query, style, transition, trigger} from '@angular/animations';

/**
 * Add to enable child :leave animation (fixes https://github.com/angular/angular/issues/15753)
 */
export const TUI_PARENT_ANIMATION = trigger(`tuiParentAnimation`, [
    transition(`* => void`, [
        style({overflow: `hidden`}),
        query(`:scope > *`, [animateChild()], {optional: true}),
    ]),
]);

/**
 * Add on parent to stop initial :enter animation for children
 */
export const TUI_PARENT_STOP = trigger(`tuiParentStop`, [transition(`:enter`, [])]);
