import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcoesService } from './acoes.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();
  acoes$ = this.acoesInput.valueChanges.pipe(
    tap(console.log),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
    tap(console.log)
  );

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {}
}
