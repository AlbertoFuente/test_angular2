import {Component, View, bootstrap, For, If} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'display',
  injectables: [FriendsService]
})
@View({
    template: `
        <p>My name: {{ myName }}</p>
        <p>Friends:</p>
        <ul>
          <li *for="#name of names">
            {{ name }}
          </li>
        </ul>
        <p *if="names.length > 3">You have many friends!</p>
      `,
      directives: [For, If]
})
// Component controller
class MyAppComponent {
    myName: string;
    names: Array<string>;

  constructor(friendsService: FriendsService) {
    this.myName = 'Alberto';
    this.names = friendsService.names;
  }
}
class FriendsService {
  names: Array<string>;
  constructor() {
    this.names = ["Aarav", "Martín", "Shannon"];
  }
}

bootstrap(MyAppComponent);
