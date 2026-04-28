import {ATTR_WITH_VALUES_TO_REPLACE} from '../../ng-update/v5/steps/constants/attr-with-values-to-replace';

/**
 * Returns the migrated value for a given attribute name and its current value,
 * using the same ATTR_WITH_VALUES_TO_REPLACE table as the replaceAttrValues step.
 *
 * Structural migrations (e.g. migrateTextarea, migrateSelect) copy attribute text
 * verbatim from the original template. Since all migrations share one UpdateRecorder
 * and changes are applied in a single commitEdits(), the replaceAttrValues pass
 * cannot patch values that were moved to new positions by a structural migration.
 * Call this function when copying wrapper attributes to apply value replacements inline.
 */
export function migrateAttrValue(attrNameLower: string, currentValue: string): string {
    for (const entry of ATTR_WITH_VALUES_TO_REPLACE) {
        if (
            !entry.attrNames.some((n) => n.toLowerCase() === attrNameLower) ||
            !Array.isArray(entry.valueReplacer)
        ) {
            continue;
        }

        const match = entry.valueReplacer.find((r) => r.from === currentValue);

        if (match) {
            return match.to;
        }
    }

    return currentValue;
}
