import { Component } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faBars = faBars;
  faGithub = faGithub;

  config = this.router.config.slice(2);

  constructor(private router: Router) {}
}
