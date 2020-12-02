export interface Schema {
    extends?: Extends;
    /**
     * A map of schematic names to schematic details
     */
    schematics: {
        [key: string]: Schematic;
    };
    version?: string;
}
export declare type Extends = string[] | string;
export interface Schematic {
    aliases?: string[];
    /**
     * A description for the schematic
     */
    description: string;
    /**
     * An schematic override. It can be a local schematic or from another collection (in the
     * format 'collection:schematic')
     */
    extends?: string;
    /**
     * A folder or file path to the schematic factory
     */
    factory: string;
    /**
     * Whether or not this schematic should be listed by the tooling. This does not prevent the
     * tooling to run this schematic, just removes its name from listSchematicNames().
     */
    hidden?: boolean;
    /**
     * Whether or not this schematic can be called from an external schematic, or a tool. This
     * implies hidden: true.
     */
    private?: boolean;
    /**
     * Location of the schema.json file of the schematic
     */
    schema?: string;
}
