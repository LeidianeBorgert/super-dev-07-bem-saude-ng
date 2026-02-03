import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { RegistroStatusTag } from '../../../core/components/registro-status-tag/registro-status-tag';
import { ConsultaResponseModel } from '../../../models/consulta.model';
import { ConsultaStatusTag } from "../../../core/consulta-status-tag/consulta-status-tag";

@Component({
  selector: 'app-list',
  imports: [Button, InputTextModule, SelectModule, FormsModule, TableModule, AutoFocusModule, DialogModule,
    ReactiveFormsModule, ConsultaStatusTag],
  templateUrl: './list.html',
})
export class List {

  filtroStatus = ["Todos os Status", "Confirmada", "Agendada", "Atrasada", "Cancelada", "Em Andamento", "Finalizada"];
  filtroStatusSelecionado: string = "Todos os Status";
  filtroProfissional = ["Todos Profissionais"];
  filtroProfissionalSelecionado: string = "Todos Profissionais";


  visible: boolean = false;

  private readonly formBuilder = inject(FormBuilder);

  consultaForm = this.formBuilder.group({
    paciente: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    profissional: ['', [Validators.maxLength(15)]],
    horarioPrevisto: ['', [Validators.required]],
    data: ['', [Validators.required]],
    duracao: ['', [Validators.required]],
    observacoes: [null]
  });


  consultas: ConsultaResponseModel[] = [
    {
      paciente: 'Maria Silva',
      profissional: 'Dra. Ana Souza',
      status: 'Agendada',
      data: '2026-02-03',
      horarioPrevisto: '08:00'
    },
    {
      paciente: 'João Pereira',
      profissional: 'Dr. Carlos Lima',
      status: 'Confirmada',
      data: '2026-02-03',
      horarioPrevisto: '08:30'
    },
    {
      paciente: 'Fernanda Costa',
      profissional: 'Dra. Juliana Martins',
      status: 'Atrasada',
      data: '2026-02-03',
      horarioPrevisto: '09:00'
    },
    {
      paciente: 'Rafael Almeida',
      profissional: 'Dr. Bruno Rocha',
      status: 'Em Andamento',
      data: '2026-02-03',
      horarioPrevisto: '09:30'
    },
    {
      paciente: 'Camila Santos',
      profissional: 'Dra. Ana Souza',
      status: 'Finalizada',
      data: '2026-02-03',
      horarioPrevisto: '10:00'
    },
    {
      paciente: 'Diego Fernandes',
      profissional: 'Dr. Carlos Lima',
      status: 'Cancelada',
      data: '2026-02-04',
      horarioPrevisto: '08:00'
    },
    {
      paciente: 'Patrícia Oliveira',
      profissional: 'Dra. Juliana Martins',
      status: 'Agendada',
      data: '2026-02-04',
      horarioPrevisto: '08:30'
    },
    {
      paciente: 'Lucas Ribeiro',
      profissional: 'Dr. Bruno Rocha',
      status: 'Confirmada',
      data: '2026-02-04',
      horarioPrevisto: '09:00'
    },
    {
      paciente: 'Aline Barbosa',
      profissional: 'Dra. Ana Souza',
      status: 'Finalizada',
      data: '2026-02-04',
      horarioPrevisto: '09:30'
    },
    {
      paciente: 'Gustavo Nunes',
      profissional: 'Dr. Carlos Lima',
      status: 'Em Andamento',
      data: '2026-02-05',
      horarioPrevisto: '10:00'
    },
    {
      paciente: 'Bruna Carvalho',
      profissional: 'Dra. Juliana Martins',
      status: 'Atrasada',
      data: '2026-02-05',
      horarioPrevisto: '10:30'
    },
    {
      paciente: 'Eduardo Souza',
      profissional: 'Dr. Bruno Rocha',
      status: 'Agendada',
      data: '2026-02-06',
      horarioPrevisto: '08:00'
    }
  ];


  showDialog(): void {
   this.visible = true;
  }
    cancelar(){
    this.visible = false;
    this.consultaForm.reset();
  }

  salvar(){

  }


}
