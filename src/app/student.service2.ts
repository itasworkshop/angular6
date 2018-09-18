import { Injectable } from '@angular/core';
import { Student, STUDENTS } from './student';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  	constructor(private messageService: MessageService) { }

/*
	getStudents(): Student[]{
		return STUDENTS;
	}
*/

/*
	getStudents(): Observable<Student[]>{
		return of(STUDENTS);
	}
*/
	getStudents(): Observable<Student[]>{
	//sends message after fetching students
		this.messageService.add('This is message StudentService: fetched students');
		return of(STUDENTS);
	}

}
