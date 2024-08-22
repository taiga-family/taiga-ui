```ts
// ...

const serverConfig = mergeApplicationConfig(config, {
  providers: [
    importProvidersFrom(ServerModule),
    provideServerRendering(),
    // ..
    tuiIconsProvider({
      '@tui.heart': heart,
      '@tui.search': search,
      // ...
    }),
  ],
});

export default async (): Promise<ApplicationRef> => bootstrapApplication(App, serverConfig);
```
