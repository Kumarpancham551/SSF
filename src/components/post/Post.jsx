import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import moment from "moment"
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

function Post({ post }) {
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <div className="details">
              <span className="date">{moment(post.JoiningDate).fromNow()}</span>
              <div>
                <h3><span className="SN" >SerialNo : {post.SerialNo} </span><span className="MN">Member Number : {post.MemberNumber}</span></h3>
                <div className="Detail">
                  <h4>Name : {post.Name}</h4>
                  <h5>Member Type : {post.MemberType}</h5>
                  <h5>UIDNumber : {post.UIDNumber}</h5>
                  <h5>Mobile Number : {post.MobileNumber}</h5>
                  <h5>Performance : {post.PerformanceNumber}</h5>
                  <h5>Address : {post.Address}</h5>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post