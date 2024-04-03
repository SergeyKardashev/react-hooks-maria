import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import TaskOne from './task-one/TaskOne';
import TaskTwo from './task-two/TaskTwo';
import TaskThreeM from './task-three/TaskThreeM';

function App() {
  return (
      <>
        <ComponentsWrapper>
          <>
            <h1 className="title">Первое задание</h1>
            <TaskOne/>
          </>
          <>
            <h1 className="title">Второе задание</h1>
            <TaskTwo/>
          </>
          <>
            <h1 className="title">Третье задание</h1>
            <TaskThreeM/>
          </>
        </ComponentsWrapper>
      </>
  );
}

export default App;
