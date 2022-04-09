const Item = ({note, date, time}) => {
    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{date} {time}</p> 
        </div>
    <button className="remove">delete</button>
    
    </div>
}
//1:32:37
export default Item