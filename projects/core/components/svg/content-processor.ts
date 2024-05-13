import type {TuiSafeHtml} from '@taiga-ui/cdk';
import {tuiIsString} from '@taiga-ui/cdk';

function makeRandomSalt(): number {
    return Math.floor(Math.random() * Date.now());
}

function extractLinearGradientIdsFromSvg(svg: string): string[] {
    const ids = (svg.match(/url\(("?)('*)#(.*?)('*)\)/g) ?? []).map(url =>
        url.slice(4, url.length - 1).replaceAll(/['"#]+/g, ''),
    );

    return Array.from(new Set(ids));
}

/**
 * @description:
 * Any ‘linearGradient’ attributes which are defined on the referenced
 * element which are not defined on this element are inherited by this element.
 * If this element has no defined gradient stops, and the referenced element does
 * (possibly due to its own ‘xlink:href’ attribute), then this element inherits
 * the gradient stop from the referenced element. Inheritance can be indirect
 * to an arbitrary level; thus, if the referenced element inherits attribute
 * or gradient stops due to its own ‘xlink:href’ attribute, then the current
 * element can inherit those attributes or gradient stops.
 *
 * Documentation: https://www.w3.org/TR/SVG11/pservers.html
 *
 */
export function tuiSvgLinearGradientProcessor(
    svg: TuiSafeHtml,
    salt: number | string = makeRandomSalt(),
): TuiSafeHtml {
    if (tuiIsString(svg)) {
        const uniqueIds = extractLinearGradientIdsFromSvg(svg);

        return uniqueIds.reduce((newSvg, previousId) => {
            const newId = `id_${salt}_${previousId}`;

            return newSvg
                .replaceAll(`"${previousId}"`, `"${newId}"`)
                .replaceAll(`'${previousId}'`, `'${newId}'`)
                .replaceAll(`url('#${previousId}')`, `url('#${newId}')`)
                .replaceAll(`url("#${previousId}")`, `url("#${newId}")`)
                .replaceAll(`url(#${previousId})`, `url(#${newId})`);
        }, svg);
    }

    return svg;
}
