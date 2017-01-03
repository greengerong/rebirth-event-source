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
    import { RebirthEventSourceModule } from 'rebirth-event-source';
    
    @NgModule({
      imports: [
        BrowserModule,
        RebirthEventSourceModule
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

```typescript
    import { RebirthEventSource } from 'rebirth-event-source';

    @Component({
      selector: 'app',
      template: '<router-outlet></router-outlet>'
    })
    export class AppComponent {
    
      constructor(private eventSource: RebirthEventSource) {
    
        eventSource.on("test")
          .subscribe(console.log);
    
       eventSource.broadcast("test", { msg: '************demo************' });
 
      }
    }

```