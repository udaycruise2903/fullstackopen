const Total = ({parts}) => {
    const initialVal = 0
    const total = parts.reduce((sum, parts) => sum + parts.exercises, initialVal)
    return (
      <div>
        
      <p>total of exercises {total}</p>
      </div>
    )
}

export default Total