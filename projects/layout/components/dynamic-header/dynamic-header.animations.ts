import {animate, style, transition, trigger} from '@angular/animations';

export const tuiSlideInTopHeader = trigger('tuiSlideInTopHeader', [
    transition(
        ':enter',
        [
            style({transform: 'translate3d(0,{{enterStart}},0)', pointerEvents: 'none'}),
            animate(
                '{{duration}}ms ease-in-out',
                style({transform: 'translate3d(0,{{enterEnd}},0)'}),
            ),
        ],
        {params: {enterEnd: 0, enterStart: '100%', duration: 300}},
    ),
    transition(
        ':leave',
        [
            style({transform: 'translate3d(0,{{leaveEnd}},0)'}),
            animate(
                '{{duration}}ms ease-in-out',
                style({transform: 'translate3d(0,{{leaveStart}},0)'}),
            ),
        ],
        {params: {leaveEnd: 0, leaveStart: '100%', duration: 300}},
    ),
]);
