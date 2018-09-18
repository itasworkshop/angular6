import { Component, OnInit } from '@angular/core';
import { Student} from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
/*
	student: Student = {
    		id: 1,
    		name: 'Ramesh'
  	};
	
	students= STUDENTS;
*/
	selectedStudent: Student;

	students: Student[];

	constructor(private studentService: StudentService) { }

	ngOnInit() {
		this.getStudents();
  	}

	onSelect(student: Student):void{
		this.selectedStudent= student;
	}

  /*
	getStudents(): void {
  		this.students = this.studentService.getStudents();
	}
*/
	getStudents(): void {
  		this.studentService.getStudents().subscribe(students => this.students = students);
	}
  

}
