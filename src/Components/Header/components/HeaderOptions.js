import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOptions.css'
export default function HeaderOptions({ avatar, title, Icon, onClick }) {
  return (
    <div className="header__options" onClick={onClick}>
      {Icon && <Icon className="header__option__icon" />}
      {avatar && <Avatar className="header__option__icon" src={avatar} />}
      <h4 className="header__option__title">{title}</h4>
    </div>
  );
}
