const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.stat}</td>
    </tr>
  );
};

export default StatisticsLine;
