import {svgNodeFilter} from '@taiga-ui/cdk';

describe('SvgNodeFilter', () => {
    it('child SVG', () => {
        expect(svgNodeFilter.acceptNode({ownerSVGElement: null} as unknown as Node)).toBe(
            NodeFilter.FILTER_REJECT,
        );
    });

    it('not child SVG', () => {
        expect(svgNodeFilter.acceptNode({} as unknown as Node)).toBe(
            NodeFilter.FILTER_ACCEPT,
        );
    });
});
