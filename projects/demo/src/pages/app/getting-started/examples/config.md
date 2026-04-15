```ts
export interface TuiOptions {
  // Omit to use OS theme, this is the default
  readonly mode?: 'dark' | 'light';
  // Scale text with OS font size, enabled by default
  readonly fontScaling: boolean;
  // Global window scrollbars, 'custom' by default
  readonly scrollbars: 'custom' | 'native';
  // Opt-in to experimental features as they are introduced, 'stable' by default
  readonly apis: 'stable' | {all: boolean} | Record<string, boolean>;
}
```
