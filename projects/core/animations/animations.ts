import {
    animate,
    AnimationTriggerMetadata,
    query,
    stagger,
    style,
    transition,
    trigger,
} from '@angular/animations';
import {TUI_ANIMATION_DURATION} from '@taiga-ui/core/constants';
import {TuiDropdownAnimation} from '@taiga-ui/core/enums';

const TRANSITION = TUI_ANIMATION_DURATION + ' ease-in-out';

// @bad TODO: Break into files
export const tuiHeightCollapse: AnimationTriggerMetadata = trigger('tuiHeightCollapse', [
    transition(':enter', [style({height: 0}), animate(TRANSITION, style({height: '*'}))]),
    transition(':leave', [style({height: '*'}), animate(TRANSITION, style({height: 0}))]),
]);

export const tuiHeightCollapseList: AnimationTriggerMetadata = trigger(
    'tuiHeightCollapseList',
    [
        transition('* => *', [
            query(
                ':enter',
                [
                    style({height: 0}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({height: '*'})),
                    ]),
                ],
                {
                    optional: true,
                },
            ),
            query(
                ':leave',
                [
                    style({height: '*'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({height: 0})),
                    ]),
                ],
                {
                    optional: true,
                },
            ),
        ]),
    ],
);

export const tuiWidthCollapse: AnimationTriggerMetadata = trigger('tuiWidthCollapse', [
    transition(':enter', [style({width: 0}), animate(TRANSITION, style({width: '*'}))]),
    transition(':leave', [style({width: '*'}), animate(TRANSITION, style({width: 0}))]),
]);

export const tuiWidthCollapseList: AnimationTriggerMetadata = trigger(
    'tuiWidthCollapseList',
    [
        transition('* => *', [
            query(
                ':enter',
                [
                    style({width: 0}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({width: '*'})),
                    ]),
                ],
                {
                    optional: true,
                },
            ),
            query(
                ':leave',
                [
                    style({width: '*'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({width: 0})),
                    ]),
                ],
                {
                    optional: true,
                },
            ),
        ]),
    ],
);

export const tuiFadeIn: AnimationTriggerMetadata = trigger('tuiFadeIn', [
    transition(':enter', [style({opacity: 0}), animate(TRANSITION, style({opacity: 1}))]),
    transition(':leave', [style({opacity: 1}), animate(TRANSITION, style({opacity: 0}))]),
]);

export const tuiFadeInList: AnimationTriggerMetadata = trigger('tuiFadeInList', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({opacity: 0}),
                stagger(TUI_ANIMATION_DURATION, [
                    animate(TRANSITION, style({opacity: 1})),
                ]),
            ],
            {
                optional: true,
            },
        ),
        query(
            ':leave',
            [
                style({opacity: 1}),
                stagger(TUI_ANIMATION_DURATION, [
                    animate(TRANSITION, style({opacity: 0})),
                ]),
            ],
            {
                optional: true,
            },
        ),
    ]),
]);

export const tuiFadeInTop: AnimationTriggerMetadata = trigger('tuiFadeInTop', [
    transition(':enter', [
        style({transform: 'translateY(-10px)', opacity: 0}),
        animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ]),
    transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
    ]),
]);

export const tuiFadeInBottom: AnimationTriggerMetadata = trigger('tuiFadeInBottom', [
    transition(':enter', [
        style({transform: 'translateY(10px)', opacity: 0}),
        animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
    ]),
    transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
    ]),
]);

export const tuiDropdownAnimation: AnimationTriggerMetadata = trigger(
    'tuiDropdownAnimation',
    [
        transition(`* => ${TuiDropdownAnimation.FadeInTop}`, [
            style({transform: 'translateY(-10px)', opacity: 0}),
            animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
        ]),
        transition(`* => ${TuiDropdownAnimation.FadeInBottom}`, [
            style({transform: 'translateY(10px)', opacity: 0}),
            animate(TRANSITION, style({transform: 'translateY(0)', opacity: 1})),
        ]),
        transition(`${TuiDropdownAnimation.FadeInBottom} => *`, [
            style({transform: 'translateY(0)', opacity: 1}),
            animate(TRANSITION, style({transform: 'translateY(10px)', opacity: 0})),
        ]),
        transition(`${TuiDropdownAnimation.FadeInTop} => *`, [
            style({transform: 'translateY(0)', opacity: 1}),
            animate(TRANSITION, style({transform: 'translateY(-10px)', opacity: 0})),
        ]),
    ],
);

export const tuiScaleIn: AnimationTriggerMetadata = trigger('tuiScaleIn', [
    transition(':enter', [
        style({transform: 'scale(0)'}),
        animate(TRANSITION, style({transform: 'scale(1)'})),
    ]),
    transition(':leave', [
        style({transform: 'scale(1)'}),
        animate(TRANSITION, style({transform: 'scale(0)'})),
    ]),
]);

export const tuiScaleInList: AnimationTriggerMetadata = trigger('tuiScaleInList', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({transform: 'scale(0)'}),
                stagger(TUI_ANIMATION_DURATION, [
                    animate(TRANSITION, style({transform: 'scale(1)'})),
                ]),
            ],
            {optional: true},
        ),
        query(
            ':leave',
            [
                style({transform: 'scale(1)'}),
                stagger(TUI_ANIMATION_DURATION, [
                    animate(TRANSITION, style({transform: 'scale(0)'})),
                ]),
            ],
            {optional: true},
        ),
    ]),
]);

export const tuiSlideIn: AnimationTriggerMetadata = trigger('tuiSlideIn', [
    transition(`* => left`, [
        style({transform: 'translateX(-100%)'}),
        animate(TRANSITION, style({transform: 'translateX(0)'})),
    ]),
    transition('left => *', [
        style({transform: 'translateX(0)'}),
        animate(TRANSITION, style({transform: 'translateX(-100%)'})),
    ]),
    transition('* => right', [
        style({transform: 'translateX(100%)'}),
        animate(TRANSITION, style({transform: 'translateX(0)'})),
    ]),
    transition('right => *', [
        style({transform: 'translateX(0)'}),
        animate(TRANSITION, style({transform: 'translateX(100%)'})),
    ]),
]);

export const tuiSlideInLeft: AnimationTriggerMetadata = trigger('tuiSlideInLeft', [
    transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate(TRANSITION, style({transform: 'translateX(0)'})),
    ]),
    transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate(TRANSITION, style({transform: 'translateX(-100%)'})),
    ]),
]);

export const tuiSlideInLeftList: AnimationTriggerMetadata = trigger(
    'tuiSlideInLeftList',
    [
        transition('* => *', [
            query(
                ':enter',
                [
                    style({transform: 'translateX(-100%)'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({transform: 'translateX(0)'})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                ':leave',
                [
                    style({transform: 'translateX(0)'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({transform: 'translateX(-100%)'})),
                    ]),
                ],
                {optional: true},
            ),
        ]),
    ],
);

export const tuiSlideInRight: AnimationTriggerMetadata = trigger('tuiSlideInRight', [
    transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate(TRANSITION, style({transform: 'translateX(0)'})),
    ]),
    transition(':leave', [
        style({transform: 'translateX(0)'}),
        animate(TRANSITION, style({transform: 'translateX(100%)'})),
    ]),
]);

export const tuiSlideInRightList: AnimationTriggerMetadata = trigger(
    'tuiSlideInRightList',
    [
        transition('* => *', [
            query(
                ':enter',
                [
                    style({transform: 'translateX(100%)'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({transform: 'translateX(0)'})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                ':leave',
                [
                    style({transform: 'translateX(0)'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({transform: 'translateX(100%)'})),
                    ]),
                ],
                {optional: true},
            ),
        ]),
    ],
);

export const tuiSlideInTop: AnimationTriggerMetadata = trigger('tuiSlideInTop', [
    transition(
        ':enter',
        [
            style({transform: 'translate3d(0,{{start}},0)'}),
            animate(TRANSITION, style({transform: 'translate3d(0,{{end}},0)'})),
        ],
        {params: {end: 0, start: '100%'}},
    ),
    transition(
        ':leave',
        [
            style({transform: 'translate3d(0,{{end}},0)'}),
            animate(TRANSITION, style({transform: 'translate3d(0,{{start}},0)'})),
        ],
        {params: {end: 0, start: '100%'}},
    ),
]);

export const tuiSlideInTopList: AnimationTriggerMetadata = trigger('tuiSlideInTopList', [
    transition('* => *', [
        query(
            ':enter',
            [
                style({transform: 'translateY(100%)'}),
                stagger(TUI_ANIMATION_DURATION, [
                    animate(TRANSITION, style({transform: 'translateY(0)'})),
                ]),
            ],
            {optional: true},
        ),
        query(
            ':leave',
            [
                style({transform: 'translateY(0)'}),
                stagger(TUI_ANIMATION_DURATION, [
                    animate(TRANSITION, style({transform: 'translateY(100%)'})),
                ]),
            ],
            {optional: true},
        ),
    ]),
]);

export const tuiSlideInBottom: AnimationTriggerMetadata = trigger('tuiSlideInBottom', [
    transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate(TRANSITION, style({transform: 'translateY(0)'})),
    ]),
    transition(':leave', [
        style({transform: 'translateY(0)'}),
        animate(TRANSITION, style({transform: 'translateY(-100%)'})),
    ]),
]);

export const tuiSlideInBottomList: AnimationTriggerMetadata = trigger(
    'tuiSlideInBottomList',
    [
        transition('* => *', [
            query(
                ':enter',
                [
                    style({transform: 'translateY(-100%)'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({transform: 'translateY(0)'})),
                    ]),
                ],
                {optional: true},
            ),
            query(
                ':leave',
                [
                    style({transform: 'translateY(0)'}),
                    stagger(TUI_ANIMATION_DURATION, [
                        animate(TRANSITION, style({transform: 'translateY(-100%)'})),
                    ]),
                ],
                {optional: true},
            ),
        ]),
    ],
);
