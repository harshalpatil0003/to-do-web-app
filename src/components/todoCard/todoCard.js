import "./todoCard.css"
import bin from "./bin.png"

function todoCard({index,task,categeory,deleteItem}) {
    const Category_Emoji = {
        Sports: "🏓",
        Learning: "📚",
        Work: "💻",
        Personal: "🔐",
        Shopping: "🛍️",
        Health: "🏥",
        Other: "📁"
    }
    const Category_Color = {
        Sports: "#bfff80",
        Learning: "#8d4kff",
        Work: "#86b307",
        Personal: "#0099ff",
        Shopping: "#fffab3",
        Health: "#00cc50",
        Other: "#ff7d33"
    }

  return (
    <div className="todo-Card">
        {task}
        <span className="category categoryy" style={{backgroundColor: Category_Color[categeory]}}>
            {Category_Emoji[categeory]} {categeory}
        </span>
            <img src={bin} className="delete-icon categoryy" alt="deleteIcon" onClick={()=>{
                deleteItem(index)
            }}/>
        
    </div>
  )
}

export default todoCard