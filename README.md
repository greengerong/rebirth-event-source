# @rebirth/rebirth-event-source

[![Build Status](https://travis-ci.org/greengerong/rebirth-event-source.svg?branch=master)](https://travis-ci.org/greengerong/rebirth-event-source)
[![dependcy](https://david-dm.org/greengerong/rebirth-event-source.svg)](https://david-dm.org/greengerong/rebirth-event-source)
[![dev dependcy](https://david-dm.org/greengerong/rebirth-event-source/dev-status.svg)](https://david-dm.org/greengerong/rebirth-event-source?type=dev)
[![npm version](https://img.shields.io/npm/v/rebirth-event-source.svg)](https://www.npmjs.com/package/rebirth-event-source)

> ng2 event source by rxjs stream.

===============================


## Install
```bash
npm install rebirth-event-source --save
```

## How to use?

### Register `EventSourceModule`

```typescript
    import { EventSourceModule } from 'rebirth-event-source';
    
    @NgModule({
      imports: [
        BrowserModule,
        EventSourceModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
          
      ],
      bootstrap: [
        AppComponent
      ]
    })
    export class AppModule {
    }


    platformBrowserDynamic().bootstrapModule(AppModule)
```
   