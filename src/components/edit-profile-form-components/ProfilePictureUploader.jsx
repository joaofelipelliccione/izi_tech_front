import React from 'react';
import PropTypes from 'prop-types';
import userPicDefault from '../../images/user-picture.png';

function ProfilePictureUploader({
  editUserPicture, setEditUserPicture,
}) {
  const onSelectImage = ({ target }) => {
    setEditUserPicture(URL.createObjectURL(target.files[0]));
  };

  return (
    <div id="profilePicUploaderContainer">
      <img
        src={ editUserPicture !== '' ? editUserPicture : userPicDefault }
        alt="Foto do usuário"
      />
      <label htmlFor="profilePicUploaderInput">
        {editUserPicture === '' ? 'adicionar foto de perfil!' : 'alterar foto de perfil!'}
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
  editUserPicture: PropTypes.string.isRequired,
  setEditUserPicture: PropTypes.func.isRequired,
};

export default ProfilePictureUploader;
