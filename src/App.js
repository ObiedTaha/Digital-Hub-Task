import { Toaster } from 'react-hot-toast';
import './App.css';

import Layout from './components/Layout/Layout';
import { TaskProvider } from './Context/TaskContext';

function App() {
  return <>
    <TaskProvider>
      <Layout />
      <Toaster />
    </TaskProvider>,

  </>
}

export default App;
