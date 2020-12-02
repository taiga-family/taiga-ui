import { ExecutionOptions, Rule } from '../engine/interface';
/**
 * Run a schematic from a separate collection.
 *
 * @param collectionName The name of the collection that contains the schematic to run.
 * @param schematicName The name of the schematic to run.
 * @param options The options to pass as input to the RuleFactory.
 */
export declare function externalSchematic<OptionT extends object>(collectionName: string, schematicName: string, options: OptionT, executionOptions?: Partial<ExecutionOptions>): Rule;
/**
 * Run a schematic from the same collection.
 *
 * @param schematicName The name of the schematic to run.
 * @param options The options to pass as input to the RuleFactory.
 */
export declare function schematic<OptionT extends object>(schematicName: string, options: OptionT, executionOptions?: Partial<ExecutionOptions>): Rule;
