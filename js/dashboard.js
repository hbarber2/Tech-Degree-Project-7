/*
//////////////Variables////////////////
*/
const alertBanner = document.getElementById('alert');
const bell = document.getElementsByClassName('bell');
const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');
const user = document.getElementById('search-for-user');
const message = document.getElementById('message-for-user');
const send = document.getElementById('primary-button');
const search = document.getElementById('search');
const submit = document.getElementById('submit-btn');
const icon = document.getElementsByClassName('icon');

/*
//////////////Alert Bar////////////////
*/


function init() {
	search.value = '';
	user.value = '';
	message.value = '';
}

alertBanner.innerHTML =
	`
	<div class="alert-banner">
		<span class="alert-text"><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</span>
		<div class="alert-banner-close"><span>x</span></div>
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





init();














