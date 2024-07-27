import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
  <div>

    <h3>Comentarios de lo que sea</h3>
    <img src="https://imgv3.fotor.com/images/share/fotor-ai-generate-a-lifelike-dragon.jpg" alt="">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt est saepe illo deleniti quod cupiditate deserunt modi, aliquid repellat similique dolores temporibus, mollitia earum ea vero et! Vero, corporis reiciendis?
    </div>
    `,
  styles: `
 
  img{
    width:100%;
    height:600px;
  }`
})
export class CommentsComponent {

}
