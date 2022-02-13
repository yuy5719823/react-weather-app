type Props = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = (props: Props) => {
  const { setCity, getWeather } = props;
  return (
    <form onSubmit={getWeather}>
      <input type="text" placeholder="都市名" onChange={(e) => setCity(e.target.value)} />
      <button type="submit">Get Weather</button>
    </form>
  );
};

// https://api.weatherapi.com/v1/current.json?key=2dad2e43878046bf85611948221302&q=London&aqi=no
