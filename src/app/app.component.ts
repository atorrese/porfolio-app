import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'porfolio-app';
  public listadeVideos :Array<any> =[];
  ngOnInit(): void {
     this.listadeVideos = [
       {
         title:'Video 1',
         subtitle: 'lorem',
         img:'https://i.ytimg.com/an_webp/wEfaoAa99XY/mqdefault_6s.webp?du=3000&sqp=CNSKkIkG&rs=AOn4CLAGok2L-ni8Qa3-zlgOuLpEc1r7eA'
       },
       {
         title:'Video 2',
         subtitle: 'lorem',
         img:'https://www.youtube.com/watch?v=Gx4iBLKLVHk'
       },
       {
         title:'Video 3',
         subtitle: 'lorem',
         img:'https://picsum.photos/536/354'
       },
     ]
  }

}
