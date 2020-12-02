import * as mm from 'micromatch';
import { resolve, sep } from 'path';
import ensureArray from './utils/ensureArray';

export default function createFilter(
	include?: Array<string | RegExp> | string | RegExp | null,
	exclude?: Array<string | RegExp> | string | RegExp | null
): (id: string | any) => boolean {
	const getMatcher = (id: string | RegExp) =>
		isRegexp(id)
			? id
			: {
					test: mm.matcher(
						resolve(id)
							.split(sep)
							.join('/')
					)
			  };

	const includeMatchers = ensureArray(include).map(getMatcher);
	const excludeMatchers = ensureArray(exclude).map(getMatcher);

	return function(id: string | any): boolean {
		if (typeof id !== 'string') return false;
		if (/\0/.test(id)) return false;

		id = id.split(sep).join('/');

		for (let i = 0; i < excludeMatchers.length; ++i) {
			const matcher = excludeMatchers[i];
			if (matcher.test(id)) return false;
		}

		for (let i = 0; i < includeMatchers.length; ++i) {
			const matcher = includeMatchers[i];
			if (matcher.test(id)) return true;
		}

		return !includeMatchers.length;
	};
}

function isRegexp(val: any): val is RegExp {
	return val instanceof RegExp;
}
