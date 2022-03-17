import React from 'react';
import PropTypes from 'prop-types';
import ProfilePictureUploader from './ProfilePictureUploader';

function EditProfileBlock1({
  userPicPreview, setUserPicPreview,
  editUserPicture, setEditUserPicture,
  editUsername, setEditUsername,
  editUserMail,
  dateOfRegister }) {
  return (
    <div id="editProfileBlock1">
      <ProfilePictureUploader
        userPicPreview={ userPicPreview }
        setUserPicPreview={ setUserPicPreview }
        editUserPicture={ editUserPicture }
        setEditUserPicture={ setEditUserPicture }
      />
      <div id="editProfileBlock1-1">
        <label htmlFor="editUsernameInput">
          nome completo:
          {' '}
          {<span className="editProfileInfoRequiredField">*</span>}
          <input
            id="editUsernameInput"
            type="text"
            name="editUsername"
            value={ editUsername }
            onChange={ ({ target }) => setEditUsername(target.value) }
            placeholder="nome completo"
          />
        </label>
        <label htmlFor="editUserMailInput">
          email:
          <output>{editUserMail}</output>
        </label>
        <h2>{`membro do izi tech desde ${dateOfRegister}`}</h2>
      </div>
    </div>
  );
}

EditProfileBlock1.propTypes = {
  userPicPreview: PropTypes.string.isRequired,
  setUserPicPreview: PropTypes.func.isRequired,
  editUserPicture: PropTypes.string.isRequired,
  setEditUserPicture: PropTypes.func.isRequired,
  editUsername: PropTypes.string.isRequired,
  setEditUsername: PropTypes.func.isRequired,
  editUserMail: PropTypes.string.isRequired,
  dateOfRegister: PropTypes.string.isRequired,
};

export default EditProfileBlock1;
