import {roundRatingBy} from './round-rating-by';

interface Options {
    max: number;
    offsetX: number;
    widthPx: number;
}

export function roundFocusedBy({offsetX, max, widthPx}: Options): number {
    const rating: number = (offsetX / widthPx) * max;

    return roundRatingBy({value: rating, max});
}
