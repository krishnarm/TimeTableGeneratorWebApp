export class SubjectEntity {
  constructor(public id:string,
              public subjectFullName:string,
              public subjectCode:string,
              public subjectYearGroupList:Array<number>,
              public subjectType:string,
              public isSubjectAPracticalSubject:boolean,
              public allSubjectYearGroupsAllocated:boolean){}
}
