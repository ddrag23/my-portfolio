
/**
 * @roxi/routify 2.15.1
 * File generated Tue May 04 2021 15:57:41 GMT+0700 (Western Indonesia Time)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-05-04T08:57:41.050Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/home/aladin/Myproject/NodeProject/my-portfolio/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "about_me.svelte",
      "filepath": "/about_me.svelte",
      "name": "about_me",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/aladin/Myproject/NodeProject/my-portfolio/src/pages/about_me.svelte",
      "importPath": "../src/pages/about_me.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/about_me",
      "id": "_about_me",
      "component": () => import('../src/pages/about_me.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/aladin/Myproject/NodeProject/my-portfolio/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "projects.svelte",
      "filepath": "/projects.svelte",
      "name": "projects",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/aladin/Myproject/NodeProject/my-portfolio/src/pages/projects.svelte",
      "importPath": "../src/pages/projects.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/projects",
      "id": "_projects",
      "component": () => import('../src/pages/projects.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

