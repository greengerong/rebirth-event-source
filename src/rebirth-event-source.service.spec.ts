import { RebirthEventSource } from './rebirth-event-source.service';

describe('event-source', () => {
    let eventSource;


    beforeEach(() => {
        eventSource = new RebirthEventSource();
    });

    it('hello', () => {
        expect(1).toEqual(1);
    });


});
