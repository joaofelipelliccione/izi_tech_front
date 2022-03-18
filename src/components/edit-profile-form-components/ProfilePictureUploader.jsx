import React from 'react';
import PropTypes from 'prop-types';
import alerts from '../../shared-functions/alerts';
import userPicDefault from '../../images/user-picture.png';

function ProfilePictureUploader({
  userPicPreview, setUserPicPreview,
  editUserPicture, setEditUserPicture,
}) {
  const onSelectImage = ({ target }) => {
    const imgSize = target.files[0].size;
    const ONE_POINT_FIVE_MB = 1500000;
    if (imgSize <= ONE_POINT_FIVE_MB) {
      setUserPicPreview(URL.createObjectURL(target.files[0]));
      setEditUserPicture(target.files[0]);
    } else {
      alerts('imgTooBig');
    }
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
