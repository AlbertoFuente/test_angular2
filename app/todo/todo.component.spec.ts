import {
    describe, expect, it, xit, inject, beforeEachProviders
}
from 'angular2/testing';
import {
    AppComponent
}
from './todo.component';

export function main() {
    describe('AppComponent', () => {
        beforeEachProviders(() => [
            AppComponent
        ]);

        it('Test todos list', () => {
            let appComponent = new AppComponent();
            expect(appComponent.todos).toEqual(["Eat Breakfast", "Walk Dog", "Breathe"]);
        });

        it('Test checkTodo method', () => {
            let appComponent = new AppComponent(),
                checkTodoItem = appComponent.checkTodo("Eat Breakfast");
            expect(checkTodoItem).toBe(0);
        });

        it('Test removeListElement method', () => {
            let appComponent = new AppComponent(),
                mockTodoList =["Eat Breakfast", "Walk Dog"];

            appComponent.removeListElement("Breathe");
            expect(appComponent.todos).toEqual(mockTodoList);
        });

        it('Test doneTyping method', () => {
            let appComponent = new AppComponent(),
                mockTodoList = ["Eat Breakfast", "Walk Dog", "Breathe"],
                mockObj = {
                    'which': 13,
                    'target': {
                        'value': 'Breathe'
                    }
                };
            appComponent.removeListElement("Breathe");
            appComponent.doneTyping(mockObj);
            expect(appComponent.todos).toEqual(mockTodoList)
        });
    });
}
