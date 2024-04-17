const path = require('node:path');
const fs = require('node:fs');

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
        const processed = content
            .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, '')
            .replaceAll(
                /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                '<$1 vector-effect="non-scaling-stroke"',
            );

        fs.writeFileSync(
            path.join(dest, processName(filename)),
            processed
                .replace('width="24"', 'width="16"')
                .replace('height="24"', 'height="16"'),
        );

        fs.writeFileSync(path.join(dest, processName(filename, 'Large')), processed);
    });
})();

function processName(name: string, postfix = ''): string {
    return `tuiIcon${name
        .replace('.svg', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')}${postfix}.svg`;
}
