const path = require('node:path');
const fs = require('node:fs');

(function main(): void {
    const src = path.join(process.cwd(), 'node_modules', 'lucide-static', 'icons');
    const dest = process.argv[2] || path.join(process.cwd(), 'projects', 'icons', 'src');

    fs.readdirSync(src).forEach((filename: string) => {
        const content = fs.readFileSync(path.join(src, filename), 'utf-8');

        fs.writeFileSync(
            path.join(dest, filename),
            content.replaceAll(
                /<(circle|ellipse|line|polygon|polyline|path|rect)/g,
                '<$1 vector-effect="non-scaling-stroke"',
            ),
        );
    });
})();
