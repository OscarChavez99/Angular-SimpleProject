import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit{
  titulo?: string;
  mostrar: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void{
    this.route.queryParams.subscribe(params => {
      this.titulo = params['titulo'];
    });
  }

  public btnMostrar_Click(){
    this.mostrar = !this.mostrar;
  }
}
