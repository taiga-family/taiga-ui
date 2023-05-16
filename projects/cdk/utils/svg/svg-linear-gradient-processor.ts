import {TuiSafeHtml} from '@taiga-ui/cdk/interfaces';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';

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
    salt?: number | string,
): TuiSafeHtml {
    if (tuiIsString(svg)) {
        const uniqueIds = extractLinearGradientIdsFromSvg(svg);

        return uniqueIds.reduce((newSvg, previousId) => {
            const escapedId = escapeRegExp(previousId);
            const newId = `${previousId}_${salt || makeRandomSalt()}`;

            return newSvg
                .replace(new RegExp(`"${escapedId}"`, `g`), `"${newId}"`)
                .replace(new RegExp(`'${escapedId}'`, `g`), `'${newId}'`)
                .replace(new RegExp(`url\\('#${escapedId}'\\)`, `g`), `url('#${newId}')`)
                .replace(new RegExp(`url\\("#${escapedId}"\\)`, `g`), `url("#${newId}")`)
                .replace(new RegExp(`url\\(#${escapedId}\\)`, `g`), `url(#${newId})`);
        }, svg);
    }

    return svg;
}

function makeRandomSalt(): number {
    return Math.floor(Math.random() * Date.now());
}

function escapeRegExp(search: string): string {
    return search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, `\\$&`);
}

function extractLinearGradientIdsFromSvg(svg: string): string[] {
    const ids = (svg.match(/url\(("?)('*)#(.*?)('*)\)/g) ?? []).map(url =>
        url.slice(4, url.length - 1).replace(/['"#]+/g, ``),
    );

    return Array.from(new Set(ids));
}
