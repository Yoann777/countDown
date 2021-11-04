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

	if (restCheckIn <= 0) {
		timeCheckIn.innerHTML = `EN COURS`;
		timeCheckIn.style.color = "#0f0";
	} else {
		timeCheckIn.innerHTML = `${dayLeftCheckInTrunc} d ${hourLeftCheckInTrunc} h ${minuteLeftCheckInTrunc} m ${secondLeftCheckInTrunc} s`;
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

	if (restBoarding <= 0) {
		timeCheckIn.innerHTML = `TERMINE`;
		timeCheckIn.style.color = "#f00";
		timeBoarding.innerHTML = `EN COURS`;
		timeBoarding.style.color = "#0f0";
	} else {
		timeBoarding.innerHTML = `${dayLeftBoardingTrunc} d ${hourLeftBoardingTrunc} h ${minuteLeftBoardingTrunc} m ${secondLeftBoardingTrunc} s`;
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

	if (restDeparture <= 0) {
		timeCheckIn.innerHTML = `TERMINE`;
		timeCheckIn.style.color = "#f00";
		timeBoarding.innerHTML = `TERMINE`;
		timeBoarding.style.color = "#f00";
		timeDeparture.innerHTML = `EN COURS`;
		timeDeparture.style.color = "#0f0";
		if(secondLeftDepartureTrunc + 900 <= 0) {
			timeDeparture.innerHTML = `TERMINE`;
		timeDeparture.style.color = "#f00";
		}
	} else {
		timeDeparture.innerHTML = `${dayLeftDepartureTrunc} d ${hourLeftDepartureTrunc} h ${minuteLeftDepartureTrunc} m ${secondLeftDepartureTrunc} s`;
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

	if (restArrival <= 0) {
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
		timeArrival.innerHTML = `${dayLeftArrivalTrunc} d ${hourLeftArrivalTrunc} h ${minuteLeftArrivalTrunc} m ${secondLeftArrivalTrunc} s`;
		timeArrival.style.color = "#00f";
	}
}


setInterval(checkIn, 1000);
setInterval(boarding, 1000);
setInterval(departure, 1000);
setInterval(arrival, 1000);
