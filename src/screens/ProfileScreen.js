import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signOut_user = () => signOut(auth);

  return (
    <div className="profileScreen">
      <Nav show={true} />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://i.pinimg.com/originals/b4/0f/9f/b40f9f8fc0fb88aabf2a8acbc39c0ac0.png"
            alt=""
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Plans (Current plan : basic)</h3>
              <p>Renewal date : 01/07/2022</p>
              <div className="plans_grid">
                <div className="plan">
                  <div className="plans">
                    <h4>Basic</h4>
                    <h5>480p</h5>
                  </div>
                  <div className="subscribe_btn">
                    <button>subscribe</button>
                  </div>
                </div>

                <div className="plan">
                  <div className="plans">
                    <h4>Standard</h4>
                    <h5>1080p</h5>
                  </div>
                  <div className="subscribe_btn">
                    <button>subscribe</button>
                  </div>
                </div>

                <div className="plan">
                  <div className="plans">
                    <h4>Premium</h4>
                    <h5>4K+HDR</h5>
                  </div>
                  <div className="subscribe_btn">
                    <button>subscribe</button>
                  </div>
                </div>
              </div>
              <button onClick={signOut_user} className="profileScreen_signOut">
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
