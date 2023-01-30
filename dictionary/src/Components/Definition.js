import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
export const Definition = (props) => {
  const Def_fn=(props)=>{
    return(<> <h2 className="alert-warning text-center">
    Some Definition of &nbsp;
    <span style={{ color: "green", textDecoration: "underline " }}>
      {props.custom}
    </span>
    &nbsp; are :
  </h2>

  {props.sale?.[0]?.map((e) => {
    return (
      <p
        style={{
          fontFamily: "Sofia,sans-serif",
          fontSize: "30px",
          textShadow: "3px 3px 3px #ababab",
        }}
        key={e}
      >
        <RadioButtonCheckedIcon /> {e}
      </p>
    );
  })}
    </>);
  }
    return (
    <>
    {
      props.sale && props.sale.length>0?Def_fn(props):<p>NO WORD FOUND</p>
    }</>
  );
};
