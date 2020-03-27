var i = 0;
var howManyToDelete = 0;
while(howManyToDelete <= 0){
	var howManyToDelete = prompt('How Many Photos To Delete? : ', '100');
}
function banner(){
	console.log ("---------------------------------");
	console.log (" Bulk Photo Delete For Instagram ");
	console.log ("-------- GITHUB/NARCOTIC --------");
}                                                                       
function bulkDelete() {
	setTimeout(function () {
        document.querySelector('div.Igw0E.rBNOH.YBx95._4EzTm').click();
        setTimeout(function () { 
			document.querySelector('button.aOOlW.-Cab_').click();
			}, 2800)
        setTimeout(function () {
			document.querySelector('button.aOOlW.-Cab_').click();
			}, 2800)
        console.log (i + 1 +" Photos Deleted");
        i++;
        if (i < howManyToDelete) {
            bulkDelete();
        }
    }, 2800)
}
banner();
bulkDelete();