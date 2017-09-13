# imard lms

IMARD Learning Management System. Manages modules' and subjects' dependencies.

### Usage

For now there are three 'business-logic' urls available to use:
	1. / (GET) - starting page. Contains a form for submitting new test module;
	2. /submit-module (PUT) - registers and puts into the storage new module. This is a direct way to submit new module, without a GUI form.
	3. /get-tree (GET) (?subject=<subjectName> - mandatory) - returns the dependence tree of modules. The nodes are modules, and the edges are dependencies of parent module on the children modules. Result format is a JSON object, more concrete, a structure with two fields - an inlined module array and a map{module subject : module array index}.
