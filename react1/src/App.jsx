import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <a href="https://yandex.ru/search/?text=rjirb&clid=2261451&banerid=0699000003%3ASW-83cf79aaf16b&win=592&lr=43" target="_blank">
          <div className="cats">gg</div>
        </a>
        <a href="https://yandex.ru/search/?text=rjirb&clid=2261451&banerid=0699000003%3ASW-83cf79aaf16b&win=592&lr=43" target="_blank">
          <div className="cats">Нажмите</div>
        </a>
        <a href="https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fscontent-frx5-1.cdninstagram.com%2Fv%2Ft51.2885-15%2Fe35%2F91231570_306298167011470_7463761125460243676_n.jpg%3F_nc_ht%3Dscontent-frx5-1.cdninstagram.com%26_nc_cat%3D110%26_nc_ohc%3DeGptW5YNWP8AX-_ZS8F%26edm%3DABfd0MgBAAAA%26ccb%3D7-4%26oh%3Dbfcfe60f5b19d24ca2a9beba360a7279%26oe%3D619438CD%26_nc_sid%3D7bff83&lr=43&pos=0&rpt=simage&text=с%201%20апреля" target="_blank">
        <div className="cats">Не нажимайте</div>
        </a>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
