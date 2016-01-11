(function() {
    'use strict';

    describe('Test Todo Component', function() {
        beforeEach(function() {
            this.server = sinon.fakeServer.create();
            this.todo = {
                appComponent: new AppComponent()
            }
        });
        afterEach(function() {
            this.server.restore();
            this.todo = null;
        });
    });

    it('Test todos list', function() {
        expect(typeof this.todo.appComponent.todos).toBe('array');
    });
});
