```ts
// ...

const serverConfig = mergeApplicationConfig(config, {
  providers: [
    importProvidersFrom(ServerModule),
    provideServerRendering(),
    // ..
    tuiIconsProvider({
      '@tui.badge-euro': euro,
      '@tui.badge-russian-ruble': ruble,
    }),
  ],
});

export default async (): Promise<ApplicationRef> => bootstrapApplication(App, serverConfig);
```
