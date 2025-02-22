import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username="lopez"
  isLoggedIn= false

  fav = ""

  getFavorite(gameName:string){
      this.fav = gameName
  }

  greet(){
    alert("Open Alert, Hello!!")
  }
}
