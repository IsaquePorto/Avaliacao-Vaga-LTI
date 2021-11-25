import { AppService } from './service/app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testLTI';
  sentence: any;

  transacoes: any;

  constructor(private appService: AppService) { }

  getSetence() {
    this.appService.get().subscribe((data: any) => {
      this.sentence = data;
      console.log(data)
    },
      (error) => {
        console.log(error);

      })
  }

  getPaginatioExample() {
    const req = { page: 0, size: 5 };
    this.appService.getPagination(req).subscribe((data) => {
      this.transacoes = data
      console.log(data);
    }, (error) => {
      console.log(error);

    })
  }

  postExample() {
    const obj = { name: 'Teste', trips: 20, airline: 8 };
    this.appService.post(obj).subscribe(() => {
      console.log('Success');
    }, (error) => {
      console.log(error);

    })
  }
}
