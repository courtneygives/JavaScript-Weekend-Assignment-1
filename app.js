var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayout = 0;

function Claim (name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
	this.payout = 0;

}

var moList = [
	new Claim("Genghis Khan", "Emergency", 11000),
	new Claim("Copernicus", "Optical", 980),
	new Claim("Taylor Swift", "Primary Care", 400),
	new Claim("George Washington", "Specialist", 6900),
	new Claim("Henry Tudor VIII", "Primary Care", 30)
];

var finalList = initialList.concat(moList);

//function to determine percent covered
function percentage (claimObject){
	switch (claimObject.visitType) {
		case "Optical":
			claimObject.payout = claimObject.visitCost * 0;
			break;
		case "Specialist":
			claimObject.payout = claimObject.visitCost * .10;
			break;
		case "Emergency":
			claimObject.payout = claimObject.visitCost * 1;
			break;
		case "Primary Care":
			claimObject.payout = claimObject.visitCost * .5;
			break;
		default:
			claimObject.payout = claimObject.visitCost * 0;
	}
	console.log(claimObject.patientName + " payout: $" + claimObject.payout);
	totalPayout += claimObject.payout;
}

//function to determine amount covered and log payout message
function coverage (){
	for (it = 0; it < finalList.length; it++){
		percentage(finalList[it]);
		console.log('Paid out $' + finalList[it].payout + ' for ' + finalList[it].patientName + ", making the total payouts $" + totalPayout);
	}
}

coverage();
