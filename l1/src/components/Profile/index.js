import { onValue, set } from "@firebase/database";
import { useContext, useEffect, useState } from "react";
import { connect, useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  auth,
  getProfileNameRef,
  logout,
  profileShowNameRef,
} from "../../services/firebase";
import {
  changeShowName,
  CHANGE_NAME,
  changeName,
} from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { ThemeContext } from "../../utils/ThemeContext";
import { usePrev } from "../../utils/usePrev";
import { Form } from "../Form";

export const Profile = () => {
  const { setMessageColor } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const showName = useSelector(selectShowName, shallowEqual);
  const name = useSelector(selectName);

  const handleChangeShowName = () => {
    dispatch(changeShowName);
  };

  const handleClick = () => {
    setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  const handleChangeName = (text) => {
    dispatch(changeName(text));
  };

  return (
    <>
      <h3>Profile</h3>
      <div>
        <button onClick={handleClick}>Change theme</button>
      </div>
      <div>
        {showName && <span>{name}</span>}
        <input type="checkbox" />
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </>
  );
};

export const ProfileToConnect = () => {
  const { setMessageColor } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);

  const handleChangeShowName = () => {
    set(profileShowNameRef, !showName);
  };

  const handleClick = () => {
    setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  const handleChangeName = (text) => {
    console.log(auth.currentUser);
    set(getProfileNameRef(auth.currentUser.uid), text);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <>
      <h3>Profile</h3>
      <div>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <div>
        <button onClick={handleClick}>Change theme</button>
      </div>
      <div>
        {showName && <h4>{name}</h4>}
        <input type="checkbox" />
        <button onClick={handleChangeShowName}>Change show name</button>
      </div>
      <Form onSubmit={handleChangeName} />
    </>
  );
};

const mapStateToProps = (state) => ({
  showName: selectShowName(state),
  name: selectName(state),
});

const mapDispatchToProps = {
  setShowName: () => changeShowName,
  setName: changeName,
};

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileToConnect);
export default ConnectedProfile;