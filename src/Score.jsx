const Score = (props) => {
    return(
        <div className="score">
            <h4>Score: {props.score.score} </h4>
            <h4>Date Taken: {props.score.date} </h4>
        </div>
    )
};

export default Score;
