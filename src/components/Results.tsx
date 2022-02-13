type Props = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

export const Results = (props: Props) => {
  const { results } = props;
  return (
    <div>
      {results.cityName && <div>{results.cityName}</div>}
      {results.country && <div>{results.country}</div>}
      {results.conditionText && (
        <div>
          <img src={results.icon} alt="icon" />
          <span>{results.conditionText}</span>
        </div>
      )}
    </div>
  );
};
