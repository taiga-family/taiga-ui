import {animate, type AnimationMetadata, style} from '@angular/animations';
import type {TuiTableOptions} from '../../table.options';

export const expandTableBodyCloseAnimationData = (
    rows: number,
    size: TuiTableOptions['size'],
    time: number,
): AnimationMetadata[] => [
    style({
        height: `calc(var(--tui-height-${size}) * ${rows})`,
    }),
    animate(
        `${time}ms ease-in`,
        style({
            height: `0`,
        }),
    ),
];

export const expandTableBodyOpenAnimationData = (
    rows: number,
    size: TuiTableOptions['size'],
    time: number,
): AnimationMetadata[] => [
    style({
        height: `0`,
    }),
    animate(
        `${time}ms ease-in`,
        style({
            height: `calc(var(--tui-height-${size}) * ${rows})`,
        }),
    ),
    style({
        height: `0`,
    }),
];
