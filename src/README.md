# README

## Naming convention

* Folder name: **PascalCase**
  * A Component folder: **PascalCase**
  * A Module folder: **PascalCase**
  * File type folder (component, reducer, action...): all is **lowercase** `{type}s` e.g: components, actions, reducers...
* File name (should be the same with `export default` except index.js file)
  * File Structure
    * A Component file: `{Feature}` e.g: AppLayout, Header, Footer, TextBox...
    * A Container file: `{ComponentName}Container`: AppLayoutContainer, HeaderContainer, FooterContainer,...
  * Case:
    * `export default` function: **camelCase**
    * `export default` class/component: **PascalCase**
    * `export default` instance: **camelCase**
