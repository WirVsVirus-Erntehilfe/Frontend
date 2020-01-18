import { Component, OnInit } from '@angular/core';
import { AppStateFacade } from 'src/app/store/app-state.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  $exampleFlag: Observable<boolean> = this._appStateFacade.getExampleFlag();

  constructor(private _appStateFacade: AppStateFacade) { }

  ngOnInit() {
  }

  toggleFlag(): void {
    this._appStateFacade.toggleExampleFlag();
  }

}
