import { Component } from '@angular/core';
import { buildInfo } from '../build';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor() {
    console.log(`Environment: ${environment.production ? 'production': 'development'}`);
    console.log(`Version: ${buildInfo.version}`);
    console.log(`User: ${buildInfo.user}`);
    console.log(`Hash: ${buildInfo.hash}`);
    console.log(`Timestamp: ${buildInfo.timestamp}`);
    console.log(`Message: ${buildInfo.message}`);
  }

  title = 'Sullivan';
}
