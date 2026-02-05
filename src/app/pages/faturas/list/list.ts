import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { FluidModule } from 'primeng/fluid';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { FaturaResponseModel } from '../../../models/fatura.model';
import { FaturaStatusTag } from '../../../core/components/fatura-status-tag/fatura-status-tag';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list',
  imports: [ButtonModule, InputTextModule, SelectModule,
    FormsModule, TableModule,FaturaStatusTag, AutoFocusModule, DialogModule,
    InputMaskModule, DatePickerModule, TextareaModule, FluidModule,DatePipe],
  templateUrl: './list.html',
})
export class List {
  status = ["Todos os Status","Paga", "Pendente","Cancelada"];
  statusSelecionado: string = "Todos os Status";
  pesquisa: string = "";

  visible: boolean = false;

  faturas: FaturaResponseModel[]=[
  
  {
    "id":"#00001",
    "paciente": "João da Silva",
    "data": "2025-01-10",
    "valor": 250.75,
    "status": "Paga"
  },
  {
    "id": "#00002",
    "paciente": "Maria Oliveira",
    "data": "2025-01-12",
    "valor": 180.00,
    "status": "Pendente"
  },
  {
    "id": "#00003",
    "paciente": "Carlos Santos",
    "data": "2025-01-15",
    "valor": 320.40,
    "status": "Cancelada"
  },
  {
    "id": "#00004",
    "paciente": "Ana Pereira",
    "data": "2025-01-18",
    "valor": 95.90,
    "status": "Paga"
  },
  {
    "id": "#00005",
    "paciente": "Fernanda Costa",
    "data": "2025-01-20",
    "valor": 410.00,
    "status": "Pendente"
  }

];
  

  showDialog(): void {
    this.visible = true;

  }

}
