
import { useState } from 'react'
import Edit from './components/Edit'
import List from './components/List'
import './index.css'

const Home = () => {

    // const [a, setA] =useState(0)

    // function plus() {
    //     setA (function(prev){
    //         return prev + 100
    //     })
    //     console.log('plus')
    // }

    const [data, setData] = useState([]) // Home設定狀態, 繼承變數給子元件

    return <div className='app'>
        {/* {a}
        <button onClick={plus}> ya</button> */}
        <Edit add={setData} />
        <List listData={data} />
         </div>
}

export default Home
