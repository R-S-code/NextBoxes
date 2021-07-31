import style from '../styles/components/Box.module.scss';

const Box = (props:string)=> {
  return (
    <div 
      className={style.box} 
      style={{
        backgroundColor: props.box_color
      }}>
    </div>
  )
}

export default Box