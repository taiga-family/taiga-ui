const MAPPING = {
    space: '0.25rem',
};

export function migrateLessSCSSConstants(fileContent: string): string {
    if (!fileContent.includes('@taiga-ui/core/styles/taiga-ui-local')) {
        return fileContent;
    }

    return fileContent.replaceAll(
        new RegExp(`[$|@](${Object.keys(MAPPING).join('|')})`, 'g'),
        (_, variable: keyof typeof MAPPING) => MAPPING[variable],
    );
}
