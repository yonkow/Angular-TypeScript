import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'my-palyground';
  users: User[] = [
    { name: 'Pesho', age: 20 },
    { name: 'Stoyan', age: 34 },
    { name: 'Stavri', age: 52 },
    { name: 'Kircho', age: 12 },
  ];

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {

    const user: User = {
      name: inputName.value,
      age: Number(inputAge.value),
    }

    this.users.push(user)
  }



  // constructor(private cd: ChangeDetectorRef) {
  //   setTimeout(() => {
  //     this.title = 'Changed from CD.'
  //     this.cd.detectChanges();
  //   }, 3000);
  // }
}