import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  mensajes: any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPost()
  
    .subscribe( (posts: any[]) => {
      console.log(posts);
      this.mensajes = posts;
   });

 
}

}
