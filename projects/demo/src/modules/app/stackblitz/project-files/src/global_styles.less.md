```less
@import '@taiga-ui/core/styles/taiga-ui-theme.less';
@import '@taiga-ui/core/styles/taiga-ui-fonts.less';
@import '@taiga-ui/styles/taiga-ui-global.less';

app {
  display: block;
  padding: 1.5625rem;
  height: 100%;
  box-sizing: border-box;
  font-size: 16px;

  // StackBlitz changes "0px" to "0" breaking calc
  --t-0: 0.001px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--tui-border-normal);
  padding-left: 20px;
}
```
