import"./chunk-LQ6M4NCU.js";var r=`import {inject, LOCALE_ID} from '@angular/core';

export function intlThousandSeparatorPattern(
    locale: string = inject(LOCALE_ID),
): (digits: string) => readonly string[] {
    const formatter = new Intl.NumberFormat(locale, {maximumFractionDigits: 0});

    return (digits) => {
        if (!digits) {
            return [];
        }

        let position = 0;

        return formatter
            .formatToParts(BigInt(\`1\${'0'.repeat(digits.length - 1)}\`))
            .filter(({type}) => type === 'integer')
            .map(({value}) => {
                const group = digits.slice(position, position + value.length);

                position += value.length;

                return group;
            });
    };
}
`;export{r as default};
