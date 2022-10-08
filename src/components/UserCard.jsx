import React from "react";
import "../styles/styles1.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
  };

  return (
    <article>
      <div className="info__container">
        <div className="info__edit">
          <i
            onClick={() => deleteUserById(user.id)}
            className="bx bx-trash bx-sm bx-tada-hover"
          ></i>
          <i onClick={handleEdit} className="bx bx-edit-alt bx-sm bx-tada-hover"></i>
        </div>
        <h2>
          {user.first_name} {user.last_name}
        </h2>
        <ul>
          <li>
            <span>Email: </span>
            {user.email}
          </li>
          <li>
            <span>Birthday: </span>
            {user.birthday}
          </li>
        </ul>
        <footer></footer>
      </div>
    </article>
  );
};

export default UserCard;