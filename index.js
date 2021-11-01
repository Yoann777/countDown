let dateCheckInOnline = new Date("November 27, 2021 17:55:00");
let dateBoarding = new Date("November 29, 2021 4:55:00");
let dateFlyDeparture = new Date("November 29, 2021 5:55:00");
let dateFlyArrival = new Date("November 29, 2021 16:05:00");
let dateToday = new Date();

const timeCheckIn = document.getElementById("checkIn");
const timeBoarding = document.getElementById("boarding");
const timeDeparture = document.getElementById("departure");
const timeArrival = document.getElementById("arrival");

let checkIn = () => {
	let dateToday = new Date();
	let restCheckIn = (dateCheckInOnline - dateToday)/1000;

	let dayLeftCheckIn = restCheckIn/86400;
	let dayLeftCheckInTrunc = Math.trunc(dayLeftCheckIn);

	let hourLeftCheckIn = ((dayLeftCheckIn - dayLeftCheckInTrunc)*86400)/3600;
	let hourLeftCheckInTrunc = Math.trunc(hourLeftCheckIn);

	let minuteLeftCheckIn = (hourLeftCheckIn - hourLeftCheckInTrunc) * 60;
	let minuteLeftCheckInTrunc = Math.trunc(minuteLeftCheckIn);	

	let secondLeftCheckIn = (minuteLeftCheckIn - minuteLeftCheckInTrunc) * 60;
	let secondLeftCheckInTrunc = Math.trunc(secondLeftCheckIn);	

	if (dayLeftCheckInTrunc <= 0 && hourLeftCheckInTrunc <= 0 && minuteLeftCheckInTrunc <= 0 && secondLeftCheckInTrunc <= 0) {
		timeCheckIn.innerHTML = `EN COURS`;
		timeCheckIn.style.color = "#0f0";
	} else {
		timeCheckIn.innerHTML = `${dayLeftCheckInTrunc} jours ${hourLeftCheckInTrunc} heures ${minuteLeftCheckInTrunc} minutes ${secondLeftCheckInTrunc} secondes`;
		timeCheckIn.style.color = "#00f";
	}
}

let boarding = () => {
	let dateToday = new Date();
	let restBoarding = (dateBoarding - dateToday)/1000;

	let dayLeftBoarding = restBoarding/86400;
	let dayLeftBoardingTrunc = Math.trunc(dayLeftBoarding);

	let hourLeftBoarding = ((dayLeftBoarding - dayLeftBoardingTrunc)*86400)/3600;
	let hourLeftBoardingTrunc = Math.trunc(hourLeftBoarding);

	let minuteLeftBoarding = (hourLeftBoarding - hourLeftBoardingTrunc) * 60;
	let minuteLeftBoardingTrunc = Math.trunc(minuteLeftBoarding);	

	let secondLeftBoarding = (minuteLeftBoarding - minuteLeftBoardingTrunc) * 60;
	let secondLeftBoardingTrunc = Math.trunc(secondLeftBoarding);	

	if (dayLeftBoardingTrunc <= 0 && hourLeftBoardingTrunc <= 0 && minuteLeftBoardingTrunc <= 0 && secondLeftBoardingTrunc <= 0) {
		timeCheckIn.innerHTML = `TERMINE`;
		timeCheckIn.style.color = "#f00";
		timeBoarding.innerHTML = `EN COURS`;
		timeBoarding.style.color = "#0f0";
	} else {
		timeBoarding.innerHTML = `${dayLeftBoardingTrunc} jours ${hourLeftBoardingTrunc} heures ${minuteLeftBoardingTrunc} minutes ${secondLeftBoardingTrunc} secondes`;
		timeBoarding.style.color = "#00f";
	}
}





let departure = () => {
	let dateToday = new Date();
	let restDeparture = (dateFlyDeparture - dateToday)/1000;

	let dayLeftDeparture = restDeparture/86400;
	let dayLeftDepartureTrunc = Math.trunc(dayLeftDeparture);

	let hourLeftDeparture = ((dayLeftDeparture - dayLeftDepartureTrunc)*86400)/3600;
	let hourLeftDepartureTrunc = Math.trunc(hourLeftDeparture);

	let minuteLeftDeparture = (hourLeftDeparture - hourLeftDepartureTrunc) * 60;
	let minuteLeftDepartureTrunc = Math.trunc(minuteLeftDeparture);	

	let secondLeftDeparture = (minuteLeftDeparture - minuteLeftDepartureTrunc) * 60;
	let secondLeftDepartureTrunc = Math.trunc(secondLeftDeparture);	

	if (dayLeftDepartureTrunc <= 0 && hourLeftDepartureTrunc <= 0 && minuteLeftDepartureTrunc <= 0 && secondLeftDepartureTrunc <= 0) {
		timeCheckIn.innerHTML = `TERMINE`;
		timeCheckIn.style.color = "#f00";
		timeBoarding.innerHTML = `TERMINE`;
		timeBoarding.style.color = "#f00";
		timeDeparture.innerHTML = `EN COURS`;
		timeDeparture.style.color = "#0f0";
		if(secondLeftDepartureTrunc + 3600 <= 0) {
			timeDeparture.innerHTML = `TERMINE`;
		timeDeparture.style.color = "#f00";
		}
	} else {
		timeDeparture.innerHTML = `${dayLeftDepartureTrunc} jours ${hourLeftDepartureTrunc} heures ${minuteLeftDepartureTrunc} minutes ${secondLeftDepartureTrunc} secondes`;
		timeDeparture.style.color = "#00f";
	}
}

let arrival = () => {
	let dateToday = new Date();
	let restArrival = (dateFlyArrival - dateToday)/1000;

	let dayLeftArrival = restArrival/86400;
	let dayLeftArrivalTrunc = Math.trunc(dayLeftArrival);

	let hourLeftArrival = ((dayLeftArrival - dayLeftArrivalTrunc)*86400)/3600;
	let hourLeftArrivalTrunc = Math.trunc(hourLeftArrival);

	let minuteLeftArrival = (hourLeftArrival - hourLeftArrivalTrunc) * 60;
	let minuteLeftArrivalTrunc = Math.trunc(minuteLeftArrival);	

	let secondLeftArrival = (minuteLeftArrival - minuteLeftArrivalTrunc) * 60;
	let secondLeftArrivalTrunc = Math.trunc(secondLeftArrival);	

	if (dayLeftArrivalTrunc <= 0 && hourLeftArrivalTrunc <= 0 && minuteLeftArrivalTrunc <= 0 && secondLeftArrivalTrunc <= 0) {
		timeCheckIn.innerHTML = `TERMINE`;
		timeCheckIn.style.color = "#f00";
		timeBoarding.innerHTML = `TERMINE`;
		timeBoarding.style.color = "#f00";
		timeDeparture.innerHTML = `TERMINE`;
		timeDeparture.style.color = "#f00";
		timeArrival.innerHTML = `EN COURS`;
		timeArrival.style.color = "#0f0";
		if(secondLeftArrivalTrunc + 3600 <= 0){
			timeArrival.innerHTML = `TERMINE`;
		timeArrival.style.color = "#f00";
		}
	} else {
		timeArrival.innerHTML = `${dayLeftArrivalTrunc} jours ${hourLeftArrivalTrunc} heures ${minuteLeftArrivalTrunc} minutes ${secondLeftArrivalTrunc} secondes`;
		timeArrival.style.color = "#00f";
	}
}


setInterval(checkIn, 1000);
setInterval(boarding, 1000);
setInterval(departure, 1000);
setInterval(arrival, 1000);
