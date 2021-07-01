import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ServiceService } from '../service.service';



@Component({
  selector: 'app-showtodo',
  templateUrl: './showtodo.component.html',
  styleUrls: ['./showtodo.component.css']
})
export class ShowtodoComponent implements OnInit {
  title: any = `Add Your
   Upcoming Events`;

   show=0;
   avail=0;

   
   eventForm = this.fb.group({
    // userid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    events: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    // date: []
  })
  events = {
    userid: "divya123", ALLTODO: ["CLEANING","ELECTRICITY BILL" , "MEDICAL BILL"] , InACTION:["Research work","music learning"], Completed:["Driving","Painting"] 
   
    }

    

    
  ;
  results=[]
  dones=[]

  



  constructor(private fb: FormBuilder, private router: Router,private data:ServiceService) { }

  ngOnInit(): void {
  }
 
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data[event.previousIndex] ,event.container.data[event.currentIndex])
      let fi=event.previousIndex;
      let si=event.currentIndex;
      let fivalue=event.container.data[event.currentIndex];
      let sivalue=event.container.data[event.previousIndex]
      console.log(fi,si,fivalue,sivalue,event.container.id)
      if(event.container.id=="cdk-drop-list-0")
      {
      
      this.dragdroptodolistupdate(fi,si,fivalue,sivalue)
      }
      else{
        this.dragdropcompletelistupdate(fi,si,fivalue,sivalue)
      }
      
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                      console.log(event.previousContainer.data,event.container.data,event.previousContainer.id)
                      if(event.previousContainer.id=="cdk-drop-list-0"){
                           this.aftersortingtodolist(event.previousContainer.data,event.container.data)
                         
                      }
                      else{
                        this.aftersortingtodolist(event.container.data,event.previousContainer.data)
                         
                      }
                    }}
      

    
  


  save(){
    if (this.eventForm.valid) {
      let todos=this.eventForm.value.events;
        this.data.save(todos)
        .subscribe((result: any) => {
          console.log(result)
          if (result) {
            alert(result.message)
            this.results=result

          }
        },
          (result) => {
            alert(result.error.message);

          }
        )
      }
      else{
      alert("Invalid form")
      }

     
    }



            
            
     
  

  
  todoupdates(){
    this. show=1;
    this.showcompleted();
    this.showtodo();
    
  }

  showtodo(){
    this.data.showtodo()
    .subscribe((result: any) => {
      console.log(result)
      if (result) {
        this.results=result
        

      }
    },
      (result) => {
        

      }
    )
  }

  showcompleted(){
    this.data.showcompleted()
    .subscribe((result: any) => {
      console.log(result)
      if (result) {
        this.dones=result
        console.log(this.dones)
        

      }
    },
      (result) => {
        

      }
    )
  }

  dragdroptodolistupdate(fi,si,fivalue,sivalue){
    this.data.dragdroptodolistupdate(fi,si,fivalue,sivalue)
    .subscribe((result: any) => {
      console.log(result)
      if (result) {
     
        alert(result.message)

      }
    },
      (result) => {
       

      }
    )

  }

  dragdropcompletelistupdate(fi,si,fivalue,sivalue){
    this.data.dragdropcompletelistupdate(fi,si,fivalue,sivalue)
    .subscribe((result: any) => {
      console.log(result)
      if (result) {
     
        alert(result.message)

      }
    },
      (result) => {
        

      }
    )

  }

  aftersortingtodolist(todolist,completelist){
    console.log(todolist)
    this.data.aftersortingtodolist(todolist,completelist)
   
    .subscribe((result: any) => {
      console.log(result)
      if (result) {
     
        alert(result.message)

      }
    },
      (result) => {
        

      }
    )

  }

  register(){
    this.avail=1
    this.data.register()
    .subscribe((result: any) => {
      console.log(result)
      if (result) {
     
        

      }
    },
      (result) => {
      

      }
    )

  }


  }



    
    


  

 



