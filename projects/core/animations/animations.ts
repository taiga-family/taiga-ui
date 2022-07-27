import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {TuiDropdownAnimation} from '@taiga-ui/core/enums';

const TRANSITION = `{{duration}}ms ease-in-out`;
const DURATION = {params: {duration: 300}};
const STAGGER = 300;

export interface TuiDurationOptions {
    value: string;
    params: {duration: number};
}

export const tuiHeightCollapse = trigger(`tuiHeightCollapse`, [
    transition(
        `:enter`,
        [style({height: 0}), animate(TRANSITION, style({height: `*`}))],
        DURATION,
    ),
    transition(
        `:leave`,
        [style({height: `*`}), animate(TRANSITION, style({height: 0}))],
        DURATION,
    ),
]);

export const tuiHeightCollapseList = trigger(`tuiHeightCollapseList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({height: 0}),
                    stagger(STAGGER, [animate(TRANSITION, style({height: `*`}))]),
                ],
                {
                    optional: true,
                },
            ),
            query(
                `:leave`,
                [
                    style({height: `*`}),
                    stagger(STAGGER, [animate(TRANSITION, style({height: 0}))]),
                ],
                {
                    optional: true,
                },
            ),
        ],
        DURATION,
    ),
]);

export const tuiWidthCollapse = trigger(`tuiWidthCollapse`, [
    transition(
        `:enter`,
        [style({width: 0}), animate(TRANSITION, style({width: `*`}))],
        DURATION,
    ),
    transition(
        `:leave`,
        [style({width: `*`}), animate(TRANSITION, style({width: 0}))],
        DURATION,
    ),
]);

export const tuiWidthCollapseList = trigger(`tuiWidthCollapseList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({width: 0}),
                    stagger(STAGGER, [animate(TRANSITION, style({width: `*`}))]),
                ],
                {
                    optional: true,
                },
            ),
            query(
                `:leave`,
                [
                    style({width: `*`}),
                    stagger(STAGGER, [animate(TRANSITION, style({width: 0}))]),
                ],
                {
                    optional: true,
                },
            ),
        ],
        DURATION,
    ),
]);

export const tuiFadeIn = trigger(`tuiFadeIn`, [
    transition(
        `:enter`,
        [style({opacity: 0}), animate(TRANSITION, style({opacity: 1}))],
        DURATION,
    ),
    transition(
        `:leave`,
        [style({opacity: 1}), animate(TRANSITION, style({opacity: 0}))],
        DURATION,
    ),
]);

export const tuiFadeInList = trigger(`tuiFadeInList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({opacity: 0}),
                    stagger(STAGGER, [animate(TRANSITION, style({opacity: 1}))]),
                ],
                {
                    optional: true,
                },
            ),
            query(
                `:leave`,
                [
                    style({opacity: 1}),
                    stagger(STAGGER, [animate(TRANSITION, style({opacity: 0}))]),
                ],
                {
                    optional: true,
                },
            ),
        ],
        DURATION,
    ),
]);

export const tuiFadeInTop = trigger(`tuiFadeInTop`, [
    transition(
        `:enter`,
        [
            style({transform: `translateY(-10px)`, opacity: 0}),
            animate(TRANSITION, style({transform: `translateY(0)`, opacity: 1})),
        ],
        DURATION,
    ),
    transition(
        `:leave`,
        [
            style({transform: `translateY(0)`, opacity: 1}),
            animate(TRANSITION, style({transform: `translateY(-10px)`, opacity: 0})),
        ],
        DURATION,
    ),
]);

export const tuiFadeInBottom = trigger(`tuiFadeInBottom`, [
    transition(
        `:enter`,
        [
            style({transform: `translateY(10px)`, opacity: 0}),
            animate(TRANSITION, style({transform: `translateY(0)`, opacity: 1})),
        ],
        DURATION,
    ),
    transition(
        `:leave`,
        [
            style({transform: `translateY(0)`, opacity: 1}),
            animate(TRANSITION, style({transform: `translateY(10px)`, opacity: 0})),
        ],
        DURATION,
    ),
]);

export const tuiDropdownAnimation = trigger(`tuiDropdownAnimation`, [
    transition(
        `* => ${TuiDropdownAnimation.FadeInTop}`,
        [
            style({transform: `translateY(-10px)`, opacity: 0}),
            animate(TRANSITION, style({transform: `translateY(0)`, opacity: 1})),
        ],
        DURATION,
    ),
    transition(
        `* => ${TuiDropdownAnimation.FadeInBottom}`,
        [
            style({transform: `translateY(10px)`, opacity: 0}),
            animate(TRANSITION, style({transform: `translateY(0)`, opacity: 1})),
        ],
        DURATION,
    ),
    transition(
        `${TuiDropdownAnimation.FadeInBottom} => *`,
        [
            style({transform: `translateY(0)`, opacity: 1}),
            animate(TRANSITION, style({transform: `translateY(10px)`, opacity: 0})),
        ],
        DURATION,
    ),
    transition(
        `${TuiDropdownAnimation.FadeInTop} => *`,
        [
            style({transform: `translateY(0)`, opacity: 1}),
            animate(TRANSITION, style({transform: `translateY(-10px)`, opacity: 0})),
        ],
        DURATION,
    ),
]);

export const tuiScaleIn = trigger(`tuiScaleIn`, [
    transition(
        `:enter`,
        [
            style({transform: `scale(0)`}),
            animate(TRANSITION, style({transform: `scale(1)`})),
        ],
        DURATION,
    ),
    transition(
        `:leave`,
        [
            style({transform: `scale(1)`}),
            animate(TRANSITION, style({transform: `scale(0)`})),
        ],
        DURATION,
    ),
]);

export const tuiScaleInList = trigger(`tuiScaleInList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({transform: `scale(0)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `scale(1)`})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                `:leave`,
                [
                    style({transform: `scale(1)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `scale(0)`})),
                    ]),
                ],
                {optional: true},
            ),
        ],
        DURATION,
    ),
]);

export const tuiSlideIn = trigger(`tuiSlideIn`, [
    transition(
        `* => left`,
        [
            style({transform: `translateX(-100%)`}),
            animate(TRANSITION, style({transform: `translateX(0)`})),
        ],
        DURATION,
    ),
    transition(
        `left => *`,
        [
            style({transform: `translateX(0)`}),
            animate(TRANSITION, style({transform: `translateX(-100%)`})),
        ],
        DURATION,
    ),
    transition(
        `* => right`,
        [
            style({transform: `translateX(100%)`}),
            animate(TRANSITION, style({transform: `translateX(0)`})),
        ],
        DURATION,
    ),
    transition(
        `right => *`,
        [
            style({transform: `translateX(0)`}),
            animate(TRANSITION, style({transform: `translateX(100%)`})),
        ],
        DURATION,
    ),
]);

export const tuiSlideInLeft = trigger(`tuiSlideInLeft`, [
    transition(
        `:enter`,
        [
            style({transform: `translateX(-100%)`}),
            animate(TRANSITION, style({transform: `translateX(0)`})),
        ],
        DURATION,
    ),
    transition(
        `:leave`,
        [
            style({transform: `translateX(0)`}),
            animate(TRANSITION, style({transform: `translateX(-100%)`})),
        ],
        DURATION,
    ),
]);

export const tuiSlideInLeftList = trigger(`tuiSlideInLeftList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({transform: `translateX(-100%)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateX(0)`})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                `:leave`,
                [
                    style({transform: `translateX(0)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateX(-100%)`})),
                    ]),
                ],
                {optional: true},
            ),
        ],
        DURATION,
    ),
]);

export const tuiSlideInRight = trigger(`tuiSlideInRight`, [
    transition(
        `:enter`,
        [
            style({transform: `translateX(100%)`}),
            animate(TRANSITION, style({transform: `translateX(0)`})),
        ],
        DURATION,
    ),
    transition(
        `:leave`,
        [
            style({transform: `translateX(0)`}),
            animate(TRANSITION, style({transform: `translateX(100%)`})),
        ],
        DURATION,
    ),
]);

export const tuiSlideInRightList = trigger(`tuiSlideInRightList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({transform: `translateX(100%)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateX(0)`})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                `:leave`,
                [
                    style({transform: `translateX(0)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateX(100%)`})),
                    ]),
                ],
                {optional: true},
            ),
        ],
        DURATION,
    ),
]);

export const tuiSlideInTop = trigger(`tuiSlideInTop`, [
    transition(
        `:enter`,
        [
            style({transform: `translate3d(0,{{start}},0)`}),
            animate(TRANSITION, style({transform: `translate3d(0,{{end}},0)`})),
        ],
        {params: {end: 0, start: `100%`, duration: 300}},
    ),
    transition(
        `:leave`,
        [
            style({transform: `translate3d(0,{{end}},0)`}),
            animate(TRANSITION, style({transform: `translate3d(0,{{start}},0)`})),
        ],
        {params: {end: 0, start: `100%`, duration: 300}},
    ),
]);

export const tuiSlideInTopList = trigger(`tuiSlideInTopList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({transform: `translateY(100%)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateY(0)`})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                `:leave`,
                [
                    style({transform: `translateY(0)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateY(100%)`})),
                    ]),
                ],
                {optional: true},
            ),
        ],
        DURATION,
    ),
]);

export const tuiSlideInBottom = trigger(`tuiSlideInBottom`, [
    transition(
        `:enter`,
        [
            style({transform: `translateY(-100%)`}),
            animate(TRANSITION, style({transform: `translateY(0)`})),
        ],
        DURATION,
    ),
    transition(
        `:leave`,
        [
            style({transform: `translateY(0)`}),
            animate(TRANSITION, style({transform: `translateY(-100%)`})),
        ],
        DURATION,
    ),
]);

export const tuiSlideInBottomList = trigger(`tuiSlideInBottomList`, [
    transition(
        `* => *`,
        [
            query(
                `:enter`,
                [
                    style({transform: `translateY(-100%)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateY(0)`})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                `:leave`,
                [
                    style({transform: `translateY(0)`}),
                    stagger(STAGGER, [
                        animate(TRANSITION, style({transform: `translateY(-100%)`})),
                    ]),
                ],
                {optional: true},
            ),
        ],
        DURATION,
    ),
]);
