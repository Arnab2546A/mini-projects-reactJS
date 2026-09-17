import CardContent from './CardContent/CardContent'
const Card = (props) => {
  return (
    <div
      className="w-1/3 shrink-0 h-full rounded-xl bg-cover bg-center p-5 flex flex-col"
      style={{
  backgroundImage: `url(${props.image})`,
}}
    >
      <CardContent id={props.id} desc={props.desc} status={props.status} color={props.color}/>
    </div>
  );
};

export default Card;
