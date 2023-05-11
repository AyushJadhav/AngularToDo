import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  tasks : string[]=[];
  completedTask:string[]=[];

  add(newTodo: string){
    this.tasks.push(newTodo);
  }

  remove(existingTask: string){
    let confirmation= confirm(`Are you sure you want to delete the "${existingTask}" Task?`);
    if(confirmation){
      this.tasks=this.tasks.filter(t=>t!=existingTask);
    }
  }

  completed(taskDone: string){
    this.completedTask.push(taskDone);
    this.tasks=this.tasks.filter(t=>t!=taskDone);
  }

  showCompletedTask(){
    
  }
}


