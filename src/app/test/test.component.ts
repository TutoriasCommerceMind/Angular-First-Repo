import { Component } from '@angular/core';
import { BsDropdownModule } from "ngx-bootstrap/dropdown"

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [BsDropdownModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
