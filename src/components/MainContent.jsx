import Mock from 'mockjs';
import '../App.css';

const MainContent = () => {
  return (
    <div className='main-content'>
      <div className='article-content'>
      <h2 id="initial-header">Initial header</h2>
      <p>{Mock.mock('@paragraph')}</p>
      <h2 id="second-header">Second header</h2>
      <p>{Mock.mock('@paragraph')}</p>
      <h3 id="third-header">Third header</h3>
      <p>{Mock.mock('@paragraph')}</p>
      <h2 id="fourth-header">Fourth header</h2>
      <p>{Mock.mock('@paragraph')}</p>
      <h3 id="fifth-header">Fifth header</h3>
      <p>{Mock.mock('@paragraph')}</p>
      </div>
    </div>
  );
};

export default MainContent;