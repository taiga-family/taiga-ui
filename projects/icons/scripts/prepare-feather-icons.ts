const path = require('path');
const fs = require('fs');

const NO_FILL = ['check.svg'];

(function main(): void {
    const src = path.join(
        process.cwd(),
        'node_modules',
        'feather-icons',
        'dist',
        'icons',
    );
    const dest = process.argv[2] || path.join(process.cwd(), 'projects', 'icons', 'src');

    fs.readdirSync(src).forEach((filename: string) => {
        if (filename === 'check-circle.svg') {
            return;
        }

        const content = fs.readFileSync(path.join(src, filename), 'utf-8');
        const processed = content.replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, '');

        // TODO: Make icons just regular and filled if filled makes sense
        fs.writeFileSync(
            path.join(dest, processName(filename, 'Outline')),
            processed.replaceAll(
                /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                '<$1 vector-effect="non-scaling-stroke"',
            ),
        );

        const filled = processed.replace(
            ' fill="none"',
            NO_FILL.includes(filename) ? ' fill="none"' : '',
        );

        fs.writeFileSync(
            path.join(dest, processName(filename, 'Large')),
            filled.replaceAll(
                /<(circle|ellipsis|line|polygon|polyline|path|rect)/g,
                '<$1 vector-effect="non-scaling-stroke"',
            ),
        );
        fs.writeFileSync(
            path.join(dest, processName(filename)),
            filled
                .replace('stroke-width="2"', 'stroke-width="3"')
                .replace('width="24"', 'width="16"')
                .replace('height="24"', 'height="16"'),
        );
    });
})();

function processName(name: string, postfix = ''): string {
    return `tuiIcon${name
        .replace('.svg', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}${postfix}.svg`;
}
