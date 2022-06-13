import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{
  @Input('srvElement') element: { type: string, name: string, content: string};
  @Input() name: string;

  constructor() { 
    console.log('constructor called!')
  }
//ngChange is only lifecycle hook that gets argument
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngChanges called!');
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnit Called!')
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
      console.log('ngAfterContentInit called!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
}

ngAfterViewInit() {
  console.log('ngAfterView Init called!')
}

ngAfterViewChecked() {
console.log('ngAfterViewChecked called!')
}
  
ngOnDestroy() {
    console.log('ngOnDestroy called!')
  }
  
}
