export function prepareSvg(svg: string): string {
    return svg
        .replaceAll(/class="[a-zA-Z0-;.\s()\-,]*"/g, '')
        .replaceAll(
            /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
            '<$1 vector-effect="non-scaling-stroke"',
        )
        .replaceAll(/<!--.*?-->/g, '');
}
