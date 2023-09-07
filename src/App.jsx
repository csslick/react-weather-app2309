import { useState } from 'react'
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  const [location, setLocation] = useState(''); // 위치 검색어 변수
  const [weather, setWeather] = useState(''); // 날씨 변수

  const 날씨요청 = (e) => {
    e.preventDefault();
    console.log('날씨 요청함');
    // API 요청
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&lang=kr`;
    fetch(API_URL)
      .then(응답 => 응답.json())
      .then(data => {
        if(data.cod !== 200) {
          console.log('잘못된 요청입니다.');
          alert('지역을 찾을 수 없습니다.');
          setLocation(''); // 입력값 초기화
        } else {
          console.log(data);
          setWeather(data); // 데이터 상태변수에 저장
        }
      })
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search 날씨요청={날씨요청} location={location} setLocation={setLocation} />
      <Weather weather={weather} />
    </div>
  )
}

export default App
