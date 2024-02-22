import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'meu-projeto';

  #fetchService = inject(FetchService)

  ngOnInit(): void {
    this.#fetchService.getData('people')
    .subscribe(console.log)
  }
}
