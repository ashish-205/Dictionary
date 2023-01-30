import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
export const Audio = (props) => {
    const sore= props.sore?.[1]?.filter((e)=>e);
    
    const Audio_Fn=(sore)=>{
        var i=1;
        return(<>
            
          <h2 className="alert-info text-center" ><VolumeUpRoundedIcon/> Pronounciation :-</h2>
         {sore?.map((e)=>{
          return ( <span key={i++}>
          <audio   controls src={e}></audio>
          &nbsp;&nbsp;
          </span>
            
            
         )
         })}</>);
    }
  return (<>
  {sore&&sore.length>0?Audio_Fn(sore):null}
  </>)
};
