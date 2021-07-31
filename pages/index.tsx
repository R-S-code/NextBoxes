import Boxes from '../components/Boxes'
import style from '../styles/pages/index.module.scss';

const Index = ()=> {
  return (
    <main className={style.main}>
      <h1 className={style.title}>this is Box!</h1>
      <Boxes/>
    </main>
  )
}

export default Index
