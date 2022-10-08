import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../App.css";

const defaultValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  last_name: "",
};

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
}) => {
  const { handleSubmit, reset, register } = useForm();

  useEffect(() => {
    if (updateInfo) {
      reset(updateInfo);
    }
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      updateUserById(updateInfo.id, data);
      setUpdateInfo();
    } else {
      createNewUser(data);
    }
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <h2>{updateInfo ? "edit user" : "create user"}</h2>
      <hr />
      <div>
        <ul>
          <label htmlFor="email">email</label>
        </ul>
        <input type="email" id="email" {...register("email")} />
      </div>
      <div>
        <ul>
          <label htmlFor="password">password</label>
        </ul>
        <input type="password" id="password" {...register("password")} />
      </div>
      <div>
        <ul>
          <label htmlFor="first_name">first name</label>
        </ul>
        <input type="text" id="first_name" {...register("first_name")} />
      </div>
      <div>
        <ul>
          <label htmlFor="last_name">last name</label>
        </ul>
        <input type="text" id="last_name" {...register("last_name")} />
      </div>
      <div>
        <ul>
          <label htmlFor="birthday">birthday</label>
        </ul>
        <input type="date" id="birthday" {...register("birthday")} />
      </div>
      <button>{updateInfo ? "edit" : "create"}</button>
    </form>
  );
};

export default FormUsers;