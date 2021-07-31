import style from '../styles/components/Box.module.scss';
import BoxShape from './BoxShape'
import { useState } from "react";

const Box = (props:string)=> {
  const [shape, setShape] = useState(false);

  return (
    <div>
      <div 
        className={style.box} 
        style={{
          backgroundColor: props.box_color,
          height: shape ? 20 + "rem" : 12 + "rem"
        }}>
      </div>

      <BoxShape setShape={setShape} shape={shape} />
    </div>
   
  )
}

export default Box