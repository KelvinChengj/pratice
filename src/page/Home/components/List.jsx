import Item from "./Item"

// const arr =['YA',2,3]

const List = ({listData}) => {
    return <div className="list">
        {
            listData.map(item =>{
                const {note,date,time} =item // item為空集合, 先給變數空值再讀資料避免錯誤
                return <Item note={note} date={date} time={time} /> //prop
            })
        }
    </div>     
}

export default List