import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AcoesService } from './acoes.service';
import { switchMap, tap } from 'rxjs/operators';
import { merge } from 'rxjs';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit {
  acoesInput = new FormControl();
  todasAcoes$ = this.acoesService.getAcoes().pipe(tap(console.log));

  filtroPeloInput$ = this.acoesInput.valueChanges.pipe(
    tap(console.log),
    switchMap((valorDigitado) => this.acoesService.getAcoes(valorDigitado)),
    tap(console.log)
  );

  acoes$ = merge(this.todasAcoes$, this.filtroPeloInput$);

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {}
}
