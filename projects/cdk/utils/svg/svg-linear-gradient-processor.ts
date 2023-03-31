import {SafeHtml} from '@angular/platform-browser';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';

const regexpUrlIdsStr = `url\\((("{0,1}))('*)#(.*?)('*)\\)`;

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
    svg: SafeHtml | string,
    salt?: number | string,
): SafeHtml | string {
    if (tuiIsString(svg)) {
        const uniqueIds = extractLinearGradientIdsFromSvg(svg);

        return uniqueIds.reduce((processed, previousId) => {
            const newId = `${previousId}_${salt || makeRandomSalt()}`;

            return processed
                .replace(new RegExp(`"${previousId}"`, `g`), `"${newId}"`)
                .replace(
                    new RegExp(`url\\((("{0,1}))('*)#${previousId}('*)\\)`, `g`),
                    (substring): string =>
                        substring.includes(`'`) ? `url('#${newId}')` : `url(#${newId})`,
                );
        }, svg);
    }

    return svg;
}

function makeRandomSalt(): number {
    return Math.floor(Math.random() * Date.now());
}

function extractLinearGradientIdsFromSvg(svg: string): string[] {
    const matchedIdsWithPrefix = svg.match(new RegExp(regexpUrlIdsStr, `g`)) || [];

    return [...new Set(matchedIdsWithPrefix)].map(
        matched =>
            matched.includes(`'`)
                ? matched.slice(6, matched.length - 2)
                : matched.slice(5, matched.length - 1), // extract values between `url(#` and `)`
    );
}
