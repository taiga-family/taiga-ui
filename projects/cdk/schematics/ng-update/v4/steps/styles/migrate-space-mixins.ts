const DIRECTION_MAPPING = {
    all: ['margin'],
    top: ['margin-top'],
    bottom: ['margin-bottom'],
    left: ['margin-left'],
    right: ['margin-right'],
    vertical: ['margin-top', 'margin-bottom'],
    horizontal: ['margin-left', 'margin-right'],
};

const SPACE = 0.25;

// .tui-space(top, 4);
// @include tui-space(top, 4);
const LESS_MIXIN_RE = new RegExp(
    `(?:@include\\s|\\.)tui-space\\((?<direction>${Object.keys(DIRECTION_MAPPING).join('|')}),\\s?(?<size>\\d+)\\);`,
    'g',
);

export function migrateSpaceMixins(fileContent: string): string {
    return fileContent.replaceAll(
        LESS_MIXIN_RE,
        (_, direction: keyof typeof DIRECTION_MAPPING, size: string) =>
            `${DIRECTION_MAPPING[direction].map((property) => `${property}: ${Number(size) * SPACE}rem;`).join('\n')}`,
    );
}
