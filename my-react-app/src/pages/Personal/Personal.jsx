import './Personal.css';

export default function Personal() {
    const userData = JSON.parse(localStorage.getItem("userEmail"));
    const username = userData?.name;
    const userAddress = userData?.email;
    const userAvatar = userData?.picture;
    return (
        <>
            <div className="personal-activity">
                <div className="left-side-bar">
                    <img src={userAvatar} alt="avatar" />
                    <h3>{username}</h3>
                    <h4>{userAddress}</h4>
                </div>

                <div className="main-activity">

                </div>

                <div className="right-side-bar">

                </div>
            </div>
        </>
    )
}