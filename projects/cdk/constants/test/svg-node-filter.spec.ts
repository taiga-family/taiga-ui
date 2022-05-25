import {svgNodeFilter} from '../svg-node-filter';

// TODO: 3.0 rewrite tests after IE removing
describe('SvgNodeFilter', () => {
    it('child SVG', () => {
        const node: Node = {ownerSVGElement: null} as unknown as Node;

        expect((svgNodeFilter as any)(node)).toBe(NodeFilter.FILTER_REJECT);
    });

    it('not child SVG', () => {
        const node: Node = {} as unknown as Node;

        expect((svgNodeFilter as any)(node)).toBe(NodeFilter.FILTER_ACCEPT);
    });
});
