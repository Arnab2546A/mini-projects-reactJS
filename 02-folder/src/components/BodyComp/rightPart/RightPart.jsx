import Card from './Cards/Card'
const RightPart = (props) => {
  console.log(props.profiles);
  return (
    <div id='cardContainer' className="w-3/4 py-12 rounded-xl p-5 overflow-hidden">
      <div id='cardTrack' className='flex gap-4 h-full'>
      {[...props.profiles,...props.profiles].map((elem,id)=>
         <Card key={id} id={id} desc={elem.description} color={elem.color} status={elem.status} image={elem.image}/>
      )}
      </div>
    </div>
  )
}

export default RightPart