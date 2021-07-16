import { GenresContextProvider} from './Contenxt/GenresContext'

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  return (
    <GenresContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar/>
        <Content/> 
      </div>
      </GenresContextProvider>
  )
}