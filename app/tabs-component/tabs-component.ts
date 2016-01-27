import {Component} from 'angular2/core';

@Component({
  selector: 'tabs-app',
  templateUrl: 'app/tabs-component/tabs-component.html'
})
export class TabsComponent {
    // tabs texts
    public formText = 'Todos App';
    public namesListText = 'Names List';
    // active tab
    public _isActive = true;

    toggleTab(num) {
        this._isActive = !this._isActive;

        let todoApp = document.querySelector('todo-list'),
            namesApp = document.querySelector('my-app2'),
            tabObj = {
                1: () => {
                    todoApp.className = 'showApp';
                    namesApp.className = 'hideApp';
                },
                2: () => {
                    todoApp.className = 'hideApp';
                    namesApp.className = 'showApp';
                }
            }
        if (num) {
            tabObj[num]();
        } else {
            tabObj[1]();
        }
    }
}
