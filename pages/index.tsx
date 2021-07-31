import Boxes from '../components/Boxes'
import style from '../styles/pages/index.module.scss';


const Index = ()=> {
  return (
    <main className={style.main}>
      <h1 className={style.title}>this is Box!</h1>
      <Boxes/>
      <p className={style.aboutReact}>React is so amazing.</p>
      <img src="/react.png" />
    </main>
  )
}

export default Index
