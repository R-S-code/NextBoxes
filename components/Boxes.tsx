import style from '../styles/components/Boxes.module.scss';
import Box from './Box'

const Boxes = ()=> {
  return (
    <div className={style.boxes}>
      <Box box_color="red" />
      <Box box_color="orange" />
      <Box box_color="yellow" />
      <Box box_color="green" />
    </div>
  )
}

export default Boxes