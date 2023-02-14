const path = require(`path`);
const fs = require(`fs`);

(function main(): void {
    const src = path.join(
        process.cwd(),
        `node_modules`,
        `feather-icons`,
        `dist`,
        `icons`,
    );
    const dest = path.join(process.cwd(), `projects`, `icons`, `src`);

    fs.readdirSync(src).forEach((filename: string) => {
        if (filename === `check-circle.svg`) {
            return;
        }

        const content = fs.readFileSync(path.join(src, filename), `utf-8`);
        const processed = content
            .replace(` fill="none"`, ``)
            .replace(/class="[a-zA-Z0-9:;.\s()\-,]*"/, ``);

        fs.writeFileSync(path.join(dest, processName(filename, `Large`)), processed);
        fs.writeFileSync(
            path.join(dest, processName(filename)),
            processed
                .replace(`stroke-width="2"`, `stroke-width="3"`)
                .replace(`width="24"`, `width="16"`)
                .replace(`height="24"`, `height="16"`),
        );
    });
})();

function processName(name: string, postfix = ``): string {
    return `tuiIcon${name
        .replace(`.svg`, ``)
        .split(`-`)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(``)}${postfix}.svg`;
}
