import React from 'react';
import PropTypes from 'prop-types';
import userPicDefault from '../../images/user-picture.png';

function ProfilePictureUploader({
  userPicPreview, setUserPicPreview,
  editUserPicture, setEditUserPicture,
}) {
  const onSelectImage = ({ target }) => {
    setUserPicPreview(URL.createObjectURL(target.files[0]));
    setEditUserPicture(target.files[0]);
  };

  return (
    <div id="profilePicUploaderContainer">
      { editUserPicture !== '' ? (
        <img
          src={ userPicPreview === '' ? editUserPicture : userPicPreview }
          alt="Foto do usuário"
        />
      ) : (
        <img
          src={ userPicPreview === '' ? userPicDefault : userPicPreview }
          alt="Foto do usuário"
        />
      )}
      <label htmlFor="profilePicUploaderInput">
        alterar foto de perfil!
        <input
          id="profilePicUploaderInput"
          name="profilePicUploaderInput"
          type="file"
          onChange={ onSelectImage }
          accept="image/*"
        />
      </label>
    </div>
  );
}

ProfilePictureUploader.propTypes = {
  userPicPreview: PropTypes.string.isRequired,
  setUserPicPreview: PropTypes.func.isRequired,
  editUserPicture: PropTypes.string.isRequired,
  setEditUserPicture: PropTypes.func.isRequired,
};

export default ProfilePictureUploader;
