"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,793],{6979:function(e,n,a){var r=a(76775),c=a(52263),t=a(28084),s=a(94184),u=a.n(s),o=a(67294);n.Z=function(e){var n=(0,o.useRef)(!1),s=(0,o.useRef)(null),l=(0,r.k6)(),i=(0,c.Z)().siteConfig,h=(void 0===i?{}:i).baseUrl;(0,o.useEffect)((function(){var e=function(e){"s"!==e.key&&"/"!==e.key||s.current&&e.srcElement===document.body&&(e.preventDefault(),s.current.focus())};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]);var d=(0,t.usePluginData)("docusaurus-lunr-search"),f=function(){n.current||(Promise.all([fetch(""+h+d.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+h+d.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(878),a.e(245)]).then(a.bind(a,24130)),Promise.all([a.e(532),a.e(343)]).then(a.bind(a,53343))]).then((function(e){var n=e[0],a=e[1],r=e[2].default;0!==n.length&&function(e,n,a){new a({searchDocs:e,searchIndex:n,inputSelector:"#search_input_react",handleSelected:function(e,n,a){var r=h+a.url;document.createElement("a").href=r,l.push(r)}})}(n,a,r)})),n.current=!0)},p=(0,o.useCallback)((function(n){s.current.contains(n.target)||s.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return o.createElement("div",{className:"navbar__search",key:"search-box"},o.createElement("span",{"aria-label":"expand searchbar",role:"button",className:u()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),o.createElement("input",{id:"search_input_react",type:"search",placeholder:"Press S to Search...","aria-label":"Search",className:u()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:p,onBlur:p,ref:s}))}}}]);