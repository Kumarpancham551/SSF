import { useContext } from "react";
import "./rightBar.scss"
import { AuthContext } from "../../context/authContext";

const RightBar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <span>1</span>
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
            
          </div>
          <div className="user">
            <div className="userInfo">
              <span>1</span>
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
            
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
            <span>1</span>
            <span>Jane Doe</span>
              <p>
                Taken loan 
              </p>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <span>1</span>
            <span>Jane Doe</span>
              <p>
                 Taken loan
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Contact US</span>
          <div className="user">
            <div className="userInfo">
              <span>President</span>
              <span>Prabhat Kumar</span>
              <span>8873472148</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <span>Voice President</span>
              <span>Rabindra Kumar</span>
              <span>8873472148</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <span>Secretary</span>
              <span>Sandeep Kumar</span>
              <span>8873472148</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <span>Treasurer</span>
              <span>Vikash Kumar</span>
              <span>8873472148</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar