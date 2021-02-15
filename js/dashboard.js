/*
//////////////Variables////////////////
*/
const alertBanner = document.getElementById('alert');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('search-for-user');
const message = document.getElementById('message-for-user');
const send = document.getElementById('primary-button');


/*
//////////////Alert Bar////////////////
*/


alertBanner.innerHTML =
	`
	<div class="alert-banner">
		<span class="alert-text"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</span>
		<div class="alert-banner-close">x</div>
	</div>
	`;

alertBanner.addEventListener('click', e => {
	const element = e.target;
	if (element.classList.contains("alert-banner-close")) {
		alertBanner.style.display = 'none';
	}
});

/*
//////////////Traffic Chart////////////////
*/

const hourly = document.getElementById('hourly');
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');


hourly.addEventListener('click', (e) => {
	let element = e.target;
	trafficFunction(element);
});

daily.addEventListener('click', (e) => {
	let element = e.target;
	trafficFunction(element);
});

weekly.addEventListener('click', (e) => {
	let element = e.target;
	trafficFunction(element);
});

monthly.addEventListener('click', (e) => {
	let element = e.target;
	trafficFunction(element);
});



function trafficFunction(element) {


switch (element) {
	case hourly:
					let hourlyTrafficData = {
				labels: ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
				datasets: [{
					data:  [12, 10, 15, 15, 20, 20, 18, 35, 55, 50, 60, 65, 75, 90, 80, 75, 85, 70, 60, 50, 45, 45, 30, 25],
					backgroundColor: 'rgba(200, 217, 236, .5)',
					borderWidth: 1,
				}]
			};

			let hourlyTrafficOptions = {
				mainAspectRatio: false,
				aspectRatio: 2.5,
				animation: {
					duration: 0
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				},
			};

			const hourlyTrafficChart = new Chart(trafficCanvas, {
				type: 'line',
				data: hourlyTrafficData,
				options: hourlyTrafficOptions
			});
		
		clearHighlight();
		element.style.backgroundColor = "lightgreen";
		element.style.borderRadius = "5px";
		break;
		
	case daily:
			let dailyTrafficData = {
				labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
					datasets: [{
				data:  [200, 250, 300, 500, 600, 1050, 700],
				backgroundColor: 'rgba(200, 217, 236, .5)',
				borderWidth: 1,
				}]
			};

			let dailyTrafficOptions = {
				mainAspectRatio: false,
				aspectRatio: 2.5,
				animation: {
					duration: 0
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				},
			};

			const dailyTrafficChart = new Chart(trafficCanvas, {
				type: 'line',
				data: dailyTrafficData,
				options: dailyTrafficOptions
			});
		clearHighlight();
		
		element.style.backgroundColor = "lightgreen";
		element.style.borderRadius = "5px";
		break;
		
		
		case weekly:
		let trafficData = {
				labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
				datasets: [{
					data:  [750, 1250, 1000, 200, 1500, 1750, 1250, 1850, 2150, 2000, 2050],
					backgroundColor: 'rgba(200, 217, 236, .5)',
					borderWidth: 1,
				}]
			};

			let trafficOptions = {
				mainAspectRatio: false,
				aspectRatio: 2.5,
				animation: {
					duration: 0
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				},
			};

			const trafficChart = new Chart(trafficCanvas, {
				type: 'line',
				data: trafficData,
				options: trafficOptions
			});
		clearHighlight();
		
		element.style.backgroundColor = "lightgreen";
		element.style.borderRadius = "5px";
		break;
		
	case monthly:
		let monthlyTrafficData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [{
					data:  [3000, 3500, 4500, 3500, 2000, 1500, 1000, 3500, 5200, 6800, 7900, 8500],
					backgroundColor: 'rgba(200, 217, 236, .5)',
					borderWidth: 1,
				}]
			};

			let monthlyTrafficOptions = {
				mainAspectRatio: false,
				aspectRatio: 2.5,
				animation: {
					duration: 0
				},
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					display: false
				},
			};

			const monthlyTrafficChart = new Chart(trafficCanvas, {
				type: 'line',
				data: monthlyTrafficData,
				options: monthlyTrafficOptions
			});
		
		clearHighlight();
		
		element.style.backgroundColor = "lightgreen";
		element.style.borderRadius = "5px";
		break;
}
	
	function clearHighlight() {
		hourly.style.backgroundColor = "white";
		daily.style.backgroundColor = "white";
		weekly.style.backgroundColor = "white";
		monthly.style.backgroundColor = "white";
		
	}
	
}



/*
//////////////Daily Chart////////////////
*/

const dailyData = {
	labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
	datasets: [{
		data: [240, 130, 120, 150, 170, 210, 305],
		backgroundColor: 'rgba(200, 217, 236, .5)',
		borderWidth: 1,

	}]
};

const dailyOptions = {

	scales: {
		yAxes: [{
			ticks: {
				beginAtZero: true
			}
		}]
	},
	legend: {
		display: false
	},
};

const dailyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions
});



/*
//////////////Mobile Chart////////////////
*/

const mobileData = {
	labels: ["Phones", "Tablets", "Desktops"],
	datasets: [{
		label: "Number of Users",
		data: [900, 500, 1200],
		borderWidth: 0,
		backgroundColor: [
			'#feb26e',
			'#6eaffe',
			'#fe6e8f'
		]
	}]
};

const mobileOptions = {
	legend: {
		position: 'right',
		labels: {
			boxWidth: 20,
			fontStyle: 'bold',
		}
	}
};

let mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions
});

/*
////////////// Messaging ////////////////
*/



send.addEventListener('click', () => {
	if (user.value === '' && message.value === '') {
		window.alert("Please fill out both the user name and message section before sending.");
	} else if (user.value === ''){
		window.alert("Please fill out the user section before sending.");
	} else if (message.value === ''){
		window.alert("Please fill out the message section before sending.");
	} else {
			window.alert("The message was sent!");
			user.value = '';
			message.value = '';
	};

});


/* INITIALIZING PAGE */

function init() {
	search.value = '';
	user.value = '';
	message.value = '';
	trafficFunction(hourly);

}


init();














