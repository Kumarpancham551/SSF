import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import LeftBar from "../../components/leftBar/LeftBar";
import Navbar from "../../components/navbar/Navbar";
import RightBar from "../../components/rightBar/RightBar";
import "./admin.scss"

const Home = () => {
  return (
    <div className="home">
    <div className="theme-light">
    <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
          
          </div>
          {/* <RightBar /> */}
        </div>
      </div>
    </div>
  )
}

export default Home