const MAPPING = {
    'text-h1': ['font: var(--tui-typography-heading-h1)'],
    'text-h2': ['font: var(--tui-typography-heading-h2)'],
    'text-h3': ['font: var(--tui-typography-heading-h3)'],
    'text-h4': ['font: var(--tui-typography-heading-h4)'],
    'text-h5': ['font: var(--tui-typography-heading-h5)'],
    'text-h6': ['font: var(--tui-typography-heading-h6)'],
    'text-body-xl-bold': [
        'font: var(--tui-typography-legacy-body-xl)',
        'font-weight: bold',
    ],
    'text-body-xl': ['font: var(--tui-typography-legacy-body-xl)'],
    'text-body-xs': ['font: var(--tui-typography-body-xs)'],
    'text-caption-l-bold': [
        'font-size: 0.8125rem',
        'font-weight: bold',
        'font-family: var(--tui-typography-family-text)',
        'letter-spacing: 0.0625rem',
        'text-transform: uppercase',
    ],
    'text-caption-l': [
        'font-size: 0.8125rem',
        'font-weight: normal',
        'font-family: var(--tui-typography-family-text)',
        'letter-spacing: 0.0625rem',
        'text-transform: uppercase',
    ],
    'text-caption-bold': [
        'font-size: 0.6875rem',
        'font-weight: bold',
        'font-family: var(--tui-typography-family-text)',
        'letter-spacing: 0.0625rem',
        'text-transform: uppercase',
    ],
    'text-caption': [
        'font-size: 0.6875rem',
        'font-weight: normal',
        'font-family: var(--tui-typography-family-text)',
        'letter-spacing: 0.0625rem',
        'text-transform: uppercase',
    ],
};

// .tui-text-h1();
// @include tui-text-h1();
const MIXIN_RE =
    /(?:@include\s|\.)(?!text-overflow\b)(text-[\w-]+)\(([\w,\s-]+)?\)(?:\s?!important)?;/g;

export function migrateTextMixins(fileContent: string): string {
    if (!fileContent.includes('@taiga-ui/core/styles/taiga-ui-local')) {
        return fileContent;
    }

    return fileContent.replaceAll(
        MIXIN_RE,
        (originalString: string, mixinName: keyof typeof MAPPING, important = '') =>
            MAPPING[mixinName]
                ? `${MAPPING[mixinName].map((newValue) => `${newValue}${important};`).join('\n')}`
                : `${originalString} // TODO: this mixin was deleted. Replace it with inline styles. Find it source code in https://github.com/taiga-family/taiga-ui/blob/v3.x/projects/core/styles/mixins/text.less`,
    );
}
