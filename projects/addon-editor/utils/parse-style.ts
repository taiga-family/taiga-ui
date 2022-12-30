export function tuiParseStyle(style: string): Record<string, string> {
    return style
        .split(`;`)
        .reduce((ruleMap: Record<string, string>, ruleString: string) => {
            const [left, right] = ruleString.split(`:`) ?? [];

            if (left && right) {
                ruleMap[left.trim()] = right.trim();
            }

            return ruleMap;
        }, {});
}
