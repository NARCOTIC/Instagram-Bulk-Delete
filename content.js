var i = 0;
var delete_amount = 0;

while (delete_amount <= 0) {
    var delete_amount = prompt('How Many Photos to Delete? : ', '100');
}

function banner() {
    console.log("---------------------------------");
    console.log(" Bulk Photo Delete For Instagram ");
    console.log("-------- GITHUB/NARCOTIC --------");
}

function bulkDelete() {
    setTimeout(function () {
        document.querySelector('div.eLAPa').click();
        setTimeout(function () {
            document.querySelector('div.qF0y9.Igw0E.rBNOH.YBx95._4EzTm').click();
        }, 2800)
        setTimeout(function () {
            document.querySelector('button.aOOlW.-Cab_').click();
        }, 2800)
        setTimeout(function () {
            document.querySelector('button.aOOlW.-Cab_').click();
        }, 2800)
        console.log(i + 1 + " Photos Deleted");
        i++;
        if (i < delete_amount) {
            bulkDelete();
        }
    }, 2800)
}

banner();
bulkDelete();
