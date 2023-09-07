
export default function Weather(props) {
	const { weather } = props;
	return (
		<>
			{weather &&
				<div className="weather-info">
					<h2>{weather.name}</h2>
					{/* 캘빈온도->섭씨: 온도값 - 273.15 */}
					{/* <p className='temp'>{parseInt(weather.main.temp - 273.15)}&deg;</p> */}
					<p className='temp'>{(weather.main.temp - 273.15).toFixed(1)}&deg;</p>
					<p className='desc'>{weather.weather[0].description}</p>
				</div>
			}
		</>
	)
}
