import {
  Add,
  Chat,
  FavoriteRounded,
  Notifications,
  Person,
  QuestionMark,
} from '@mui/icons-material'
import { useEffect } from 'react'
import './App.css'
import MenuContainer from './components/MenuContainer'
import Pin from './components/Pin'
import Data from './components/Data'

function App() {
  useEffect(() => {
    const allIcons = document.querySelectorAll('.iconContainer')
    function setMenuActive() {
      allIcons.forEach((n) => n.classList.remove('active'))
      this.classList.add('active')
    }
    allIcons.forEach((element) => {
      element.addEventListener('click', setMenuActive)
    })
  }, [])

  return (
    <div className="App">
      <div className="menuContainer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          alt="text"
          className="logo"
        ></img>

        <div className="subMenu">
          <div>
            <MenuContainer icons={<Person />} />
            <MenuContainer icons={<Notifications />} />
            <MenuContainer icons={<Chat />} />
          </div>
          <div>
            <MenuContainer icons={<FavoriteRounded />} />
          </div>

          <div>
            <MenuContainer icons={<QuestionMark />} />
            <MenuContainer icons={<Add />} />
          </div>
        </div>
      </div>
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search.." />
          <div className="search">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYT8zI4FYMnscype7lkaHhZxmdDEV5lQ7SA&usqp=CAU"
              alt="search"
            />
          </div>
        </div>
        <div className="mainContainer">
          {Data && Data.map((data) => <Pin key={data.id} data={data}></Pin>)}
        </div>
      </main>
    </div>
  )
}

export default App
