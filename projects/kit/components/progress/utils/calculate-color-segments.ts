/**
 * TODO: 3.0 move inside {@link TuiProgressColorSegmentsDirective} (as a private method)
 * (after deletion of {@link TuiProgressColorSegmentsPipe} and {@link TuiProgressColorSegmentsAsyncPipe})
 */
import {tuiPx} from '@taiga-ui/cdk';

export const calculateColorSegments = (
    colors: string[],
    progressWidth: number,
): string => {
    const segmentWidth = Math.ceil(progressWidth / colors.length);
    const colorsString = colors.reduce(
        (acc, color, i) =>
            `${acc}, ${color} ${tuiPx(i * segmentWidth)} ${tuiPx(
                (i + 1) * segmentWidth,
            )}`,
        '',
    );

    return `linear-gradient(to right ${colorsString})`;
};
