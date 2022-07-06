import Score from "./Score"

const Student = ({student}) => {
    const { name, bio } = student
    return (
        <div className="student">
           <div className="name">
                <h2>{name}</h2> 
            </div> 
           <p>{bio}</p>
           {student.scores.map(score => <Score key={score.score} score={score} />
           )}
        </div>
    )
}

export default Student