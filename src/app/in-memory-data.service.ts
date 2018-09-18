import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
	const students = [
  		{ id: 11, name: 'Ram' },
  		{ id: 12, name: 'John' },
  		{ id: 13, name: 'Raj' },
  		{ id: 14, name: 'Ravi' },
  		{ id: 15, name: 'Rajesh' }
	];
	return {students};
  }
}


