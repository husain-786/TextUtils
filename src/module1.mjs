import defaultExportVariable, {b, c, d} from "./module2.mjs"       // if export is default then any variable name can be used but
// if its not the dfault export then the export and import variables name ust be same. {...}:- It shows non-default variables.

console.log("Display:"+defaultExportVariable)
console.log(b)
console.log(c)
console.log(d)