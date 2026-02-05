import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-fatura-status-tag',
  imports: [TagModule],
  templateUrl: './fatura-status-tag.html',
})
export class FaturaStatusTag {
  status = input<string>();
}
