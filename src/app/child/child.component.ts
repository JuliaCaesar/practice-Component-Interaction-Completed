import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-childcomponent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() inputText: string = "";
  @Output() outputEvent: EventEmitter<string> = new EventEmitter<string>();

  message:string = "";

  sendMessage(){
    this.outputEvent.emit(this.message);
  }

}
