import { Injectable } from '@angular/core';
import { Student, STUDENTS } from './student';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  	constructor(private messageService: MessageService) { }

	getStudents(): Observable<Student[]>{
	//sends message after fetching students
		this.messageService.add('This is message StudentService: fetched students');
		return of(STUDENTS);
	}

	getStudent(id: number): Observable<Student> {
    	//sends message after fetching students
    	this.messageService.add(`StudentService: fetched student id=${id}`);
    	return of(STUDENTS.find(student => student.id === id));
  }

}
