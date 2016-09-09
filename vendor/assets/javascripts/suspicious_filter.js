angular.module("suspiciousEmployees",[]).filter('suspicious', [function () {
  return function(employees) {
    if (employees) {
      var date = new Date();
      var thisYear = date.getFullYear();
      var seventyYearsAgo = thisYear - 70;
      var ret = [];

      for(i=0;i<employees.length;i++) {
        var birthYear = parseInt(employees[i].birthdate.substring(0,4));
        if(birthYear < seventyYearsAgo) {
         ret.push(employees[i]);
       };
     } 
     return ret;
   }
 }
}]);
