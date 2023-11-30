import './App.css';
import Span from './Components/Span';

function App() {
  return (
    <>
      <div className='container'>
        <Span colorName='red' textColor='white'/>
        <Span colorName='green' textColor='white'/>
        <Span colorName='blue' textColor='white'/>
        <Span colorName='olive' textColor='white'/>
        <Span colorName='grey' textColor='white'/>
        <Span colorName='yellow'/>
        <Span colorName='pink'/>
        <Span colorName='purple' textColor='white'/>
        <Span colorName='lavender'/>
        <Span colorName='white'/>
        <Span colorName='black' textColor='white'/>
      </div>
    </>
  );
}

export default App;
