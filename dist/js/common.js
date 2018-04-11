$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		responsive: [
		{
			breakpoint: 1280,
			settings: {
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 640,
			settings: {
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 360,
			settings: {
				dots: true,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				adaptiveHeight: true
			}
		}
		]
	});

	var ctx = $('.chart1').get(0).getContext('2d');
	var chart1 = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["2016", "2017", "2018"],
			datasets: [{
				label: '2016',
				data: [10, 16, 25],
				backgroundColor: [
				'rgba(43,73,137, 1)',
				'rgba(43,73,137, 1)',
				'rgba(43,73,137, 1)'
				],
				borderWidth: 1
			},
			{
				label: '2017',
				data: [60, 55, 50],
				backgroundColor: [
				'rgba(64,94,158, 1)',
				'rgba(64,94,158, 1)',
				'rgba(64,94,158, 1)'
				
				],
				borderWidth: 1
			},
			{
				label: '2018',
				data: [30,27,25],
				backgroundColor: [
				'rgba(97,127,189,1)',
				'rgba(97,127,189,1)',
				'rgba(97,127,189,1)'
				],
				
				borderWidth: 1
			}]

		},
		options: {
			responsive: false,
			scales: {
				yAxes: [{
					stacked: true
				}],
				xAxes: [{
					stacked: true
				}],
			}
		}
	});
	var ct2 = $('.chart2').get(0).getContext('2d');
	var chart2 = new Chart(ct2, {
		type: 'horizontalBar',
		data: {
			labels: [1,2,3,4,5,6,7,8],
			datasets: [{
				label: '',
				data: [24.2,13.4,10.4,4.6,4.1,4,3.3,2.1],
				backgroundColor: [
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: false,
			scales: {
				yAxes: [{
					ticks:{
						min:0,
						max: 100,
						stepSize:10
					}
				}]
			}
		}
	});
	var ct3 = $('.chart3').get(0).getContext('2d');
	var chart3 = new Chart(ct3, {
		type: 'horizontalBar',
		data: {
			labels: [1,2,3,4,5,6,7,8],
			datasets: [{
				label: '',
				data: [1.5,-0.5,0.2,-0.7,0,0.9,1.2,-0.2],
				backgroundColor: [
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)',
				'rgb(43,73,137,1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			responsive: false,
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
});

