import React from 'react';

import style from '../styles/subheader.module.scss';

function SubHeader() {
  return (
    <div className={style.subheader__container}>
      <button>+ NEW STORY</button>
      <p>ASSIGNEE</p>
    </div>
  )
};

export default SubHeader;