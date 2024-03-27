import StatisticsLine from "./StatisticsLine";

const Statistics = (props) => {
  if (props.all == 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine text="Good" stat={props.good} />
          <StatisticsLine text="Neutral" stat={props.neutral} />
          <StatisticsLine text="Bad" stat={props.bad} />
          <StatisticsLine text="All" stat={props.all} />
          <tr>
            <td>Positive</td>
            <td>{props.positive} %</td>
          </tr>
        </tbody>
      </table>
    );
  }
};

export default Statistics;
