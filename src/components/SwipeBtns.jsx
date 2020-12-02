import { IconButton } from "@material-ui/core";
import {
  Close as CloseIcon,
  Favorite as FavoriteIcon,
  FlashOn as FlashOnIcon,
  Replay as ReplyIcon,
  StarRate as StarRateIcon,
} from "@material-ui/icons";
import React from "react";

const SwipeBtns = () => {
  return (
    <div className="swipeBtns">
      <IconButton className="swipeBtns__repeat">
        <ReplyIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeBtns__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeBtns__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeBtns__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeBtns__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeBtns;
