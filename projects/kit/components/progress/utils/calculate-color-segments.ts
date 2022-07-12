/**
 * TODO: 3.0 move inside {@link TuiProgressColorSegmentsDirective} (as a private method)
 * (after deletion of {@link TuiProgressColorSegmentsPipe} and {@link TuiProgressColorSegmentsAsyncPipe})
 */

export const calculateColorSegments = (
    colors: string[],
    progressWidth: number,
): string => {
    const segmentWidth = Math.ceil(progressWidth / colors.length);
    const colorsString = colors.reduce(
        (acc, color, i) =>
            `${acc}, ${color} ${i * segmentWidth}px ${(i + 1) * segmentWidth}px`,
        '',
    );

    return `linear-gradient(to right ${colorsString})`;
};
