import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface BroadcastEvent {
    key: any;
    data?: any;
}

@Injectable()
export class RebirthEventSource {
    private _eventBus: Subject<BroadcastEvent>;

    constructor() {
        this._eventBus = new Subject<BroadcastEvent>();
    }

    broadcast(key: any, data?: any): this {
        this._eventBus.next({ key, data });
        return this;
    }

    on<T>(key: any): Observable<T> {
        return this._eventBus.asObservable()
            .pipe(
                filter(event => event.key === key),
                map(event => <T>event.data)
            );
    }

}
