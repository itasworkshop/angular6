import { Injectable } from '@angular/core';
import { Student, STUDENTS } from './student';
import { Observable, of } from 'rxjs';

/*
@Injectable({
  providedIn: 'root'
})
*/
export class StudentService {

  	constructor() { }

/*
	getStudents(): Student[]{
		return STUDENTS;
	}

*/

	getStudents(): Observable<Student[]>{
		return of(STUDENTS);
	}

}
