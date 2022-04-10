import './NoMatch.scss'
// import Header './.....................'
const NoMatch = () =>{
    return (
  <div className="no-match">
    <header/>
    <div className="no-match__contain">
    <h2>invaild video call name</h2>
    <div className="action-btn">
        <Link className="btn green" to='./'>
        Return to home screen 
        </Link>
    </div>
    </div>
    </div>

    )
}

export default NoMatch