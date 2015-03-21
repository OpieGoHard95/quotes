// Jared Smith
// Chapter Nine exercise Set problem Two
// March 20, 2015

// This defines the text to be altered
var text = "'I'm the cook,' he said, 'it's my job.'"

// Print statement where the change happens
// First iteration =  console.log(text.replace(/\W'/, "DubQuote"));
// 	This puts the words DubQuote right after cook, replacing the comma
//	I still need to figure out how to get a quotation mark to appear
//	I also need it to not replace the comma

// Second iteration = console.log(text.replace(/\W'/, "\""));
// 	This puts the " right after the cook, still replacing the comma
//	I still need to figure out how to not replace the comma

// Third iteratiopn = console.log(text.replace(/'\W/, "\""));
//	This puts the " right before the h in he, replacing the space
//	This did nothing but move my problem to a different place in the code
//	The hints in the book mentions $1 and $2 however I am not sure
//	  how to use those correctly nor how they apply in this situation
console.log(text.replace(/'\W/, "\""));
