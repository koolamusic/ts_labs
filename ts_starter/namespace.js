"use strict";
// using namespaces within files 
var calculate;
(function (calculate) {
    function schoolFees(term, fee) {
        return term * fee;
    }
    calculate.schoolFees = schoolFees;
})(calculate || (calculate = {}));
// We have declared this name space and can import it into another file
//# sourceMappingURL=namespace.js.map