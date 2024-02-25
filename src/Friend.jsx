
export default function Friend({friend}){
    const {name, email} = friend
    return (
        <div className="box">
            <h4>{name}</h4>
            <h4>{email}</h4>
        </div>
    )
}