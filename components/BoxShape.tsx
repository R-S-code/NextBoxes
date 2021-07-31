import style from '../styles/components/BoxShape.module.scss';
import { useState } from "react";

const BoxShape = (props)=> {
  const [btnMargin, setBtnMargin] = useState(false);
  
  return (
    <button 
      className={style.boxShape__btn}
      onClick={()=> {
        props.setShape(props.shape ? false : true);
        setBtnMargin(btnMargin ? false : true);
      }}
      style={{
        marginTop: btnMargin ? 4 + "rem" : 12 + "rem"
      }}
    >
      change shape
    </button>
  )
}

export default BoxShape