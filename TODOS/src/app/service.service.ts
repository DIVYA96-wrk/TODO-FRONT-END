import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  option =
  {
    withCredentials: true
  }

  constructor(private http:HttpClient) { }

  save(todoevent) {
    const dataa = {todoevent}
    return this.http.post("http://localhost:4000/save", dataa, this.option)
  }

  showtodo(){
    return this.http.get("http://localhost:4000/showtodo" ,this.option)
  }

  showcompleted(){
    return this.http.get("http://localhost:4000/showcompleted" ,this.option)
  }

  dragdroptodolistupdate(fi,si,fivalue,sivalue){
    const data={fi,si,fivalue,sivalue};
    return this.http.patch("http://localhost:4000/updatealltodo", data, this.option)

  }
  dragdropcompletelistupdate(fi,si,fivalue,sivalue){
    const data={fi,si,fivalue,sivalue};
    return this.http.patch("http://localhost:4000/updateCompleted", data, this.option)

  }
  aftersortingtodolist(todolist,completelist){
    const data={todolist,completelist};
    console.log(todolist,completelist)
    return this.http.put("http://localhost:4000/aftersorttodolist", data, this.option)
  }

  register(){
    return this.http.post("http://localhost:4000/register",this.option)
  }








}
