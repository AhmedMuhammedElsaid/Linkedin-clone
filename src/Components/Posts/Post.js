import React from "react";
import { Avatar } from "@material-ui/core";
import ThumbUpAltOutLined from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOut from "@material-ui/icons/ChatOutlined";
import Share from "@material-ui/icons/ShareOutlined";
import Send from "@material-ui/icons/SendOutlined";
import InputOption from "../Feed/components/InputOption";
import Moment from "react-moment";

import "./Post.css";
export default function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutLined} title="Like" color="gray" />
        <InputOption Icon={ChatOut} title="Comment" color="gray" />
        <InputOption Icon={Share} title="Share" color="gray" />
        <InputOption Icon={Send} title="Send" color="gray" />
      </div>
    </div>
  );
}
