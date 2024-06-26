import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { registerThunk } from "../../redux/Auth/thunks";
import FormRegistration from "components/FormRegistration/FormRegistration";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const register = (body) => {
    dispatch(registerThunk(body));
  };
  useEffect(() => {
    isAuth && navigate("/contacts");
  }, [isAuth, navigate]);

  return <FormRegistration register={register} />;
};

export default RegistrationPage;
