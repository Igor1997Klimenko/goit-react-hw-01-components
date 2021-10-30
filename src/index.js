import React from 'react';
import ReactDOM from 'react-dom';
import  user  from './user.json';
// import './index.css';

const data = user[0];


const panting = (
  <div class="profile">
    <div class="description">
      <img
        src={data.avatar}
        alt="Аватар пользователя"
        class="avatar"
      />
      <p class="name">Petra Marica</p>
      <p class="tag">@pmarica</p>
      <p class="location">Salvador, Brasil</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(panting, document.querySelector('#root'));