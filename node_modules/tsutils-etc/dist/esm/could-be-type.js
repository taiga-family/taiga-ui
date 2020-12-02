import { couldImplement } from "./could-implement";
import { isIntersectionType } from "./is-intersection-type";
import { isReferenceType } from "./is-reference-type";
import { isType } from "./is-type";
import { isUnionType } from "./is-union-type";
export function couldBeType(type, name, qualified) {
    if (isReferenceType(type)) {
        type = type.target;
    }
    if (isType(type, name, qualified)) {
        return true;
    }
    if (isIntersectionType(type) || isUnionType(type)) {
        return type.types.some((t) => couldBeType(t, name, qualified));
    }
    const baseTypes = type.getBaseTypes();
    if (baseTypes && baseTypes.some((t) => couldBeType(t, name, qualified))) {
        return true;
    }
    if (couldImplement(type, name, qualified)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=could-be-type.js.map