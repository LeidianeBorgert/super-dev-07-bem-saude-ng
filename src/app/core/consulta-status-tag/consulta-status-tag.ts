import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-consulta-status-tag',
  imports: [TagModule],
  templateUrl: './consulta-status-tag.html',
})
export class ConsultaStatusTag {
  statusConsulta = input<string>();
}
