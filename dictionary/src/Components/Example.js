import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export const Example = (props) => {
  const exam = props?.sabga?.[2]?.filter((e) => {
    return  e.example;
  });
 const Example_Fn=(exam)=>{
    var i=1;
    return( <> <h2 className="alert-warning text-center">Example :-</h2>
    {exam?.map((e) => {
      return <div key={i++} className="container"> <h4  style={{
          fontFamily: "Sofia,sans-serif",
          fontSize: "30px",
          textShadow: "3px 3px 3px #ababab"}}><RadioButtonCheckedIcon/> {e.example}</h4>
          </div>;
    })}
  </>);
 }
  return (
   <>
   {
    exam && exam.length>0?Example_Fn(exam):null
   }
   </>
  );
};
