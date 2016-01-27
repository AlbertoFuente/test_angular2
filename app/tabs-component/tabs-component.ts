import {Component} from 'angular2/core';

@Component({
  selector: 'tabs-app',
  templateUrl: 'app/tabs-component/tabs-component.html'
})
export class TabsComponent {
    // tabs texts
    public todoText = 'Todos App';
    // active tab
    public _isActive = true;

    toggleTab(num) {
        this._isActive = !this._isActive;

        let todoApp = document.querySelector('todo-list'),
            tabObj = {
                1: () => {
                    todoApp.className = 'showApp';
                },
                2: () => {
                    todoApp.className = 'hideApp';
                }
            }
        if (num) {
            tabObj[num]();
        } else {
            tabObj[1]();
        }
    }
}
