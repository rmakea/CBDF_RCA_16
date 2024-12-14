import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TirardadosComponent } from './tirardados/tirardados.component';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TirardadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio16';
}
