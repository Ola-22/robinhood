import "./style.css";

export default function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  const getModal = () => {};
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + " shares"}</p>
      </div>
      <div className="row__chart">
        <img src="/img/stock.svg" alt="" height={16} />
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        {/* <p className="row__percentage"> 200%</p> */}
        <p className="row__percentage"> +{Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}
