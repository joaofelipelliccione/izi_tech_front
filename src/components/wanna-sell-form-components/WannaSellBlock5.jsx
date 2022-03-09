import React from 'react';
import PropTypes from 'prop-types';
import productPicDefault from '../../images/product-picture.png';

function WannaSellBlock5({
  wSProductPictures, setWsProductPictures,
}) {
  const ADD_PIC = 'adicionar foto!';
  const CHANGE_PIC = 'alterar foto!';

  const [productPic1, setProductPic1] = React.useState('');
  const [productPic2, setProductPic2] = React.useState('');
  const [productPic3, setProductPic3] = React.useState('');
  const [productPic4, setProductPic4] = React.useState('');
  const [productPic5, setProductPic5] = React.useState('');

  const onSelectPicture = ({ target }) => {
    if (target.id === 'productPicUploaderInput1') {
      setProductPic1(URL.createObjectURL(target.files[0]));
      target.value = '';
    }
    if (target.id === 'productPicUploaderInput2') {
      setProductPic2(URL.createObjectURL(target.files[0]));
      target.value = '';
    }
    if (target.id === 'productPicUploaderInput3') {
      setProductPic3(URL.createObjectURL(target.files[0]));
      target.value = '';
    }
    if (target.id === 'productPicUploaderInput4') {
      setProductPic4(URL.createObjectURL(target.files[0]));
      target.value = '';
    }
    if (target.id === 'productPicUploaderInput5') {
      setProductPic5(URL.createObjectURL(target.files[0]));
      target.value = '';
    }
  };

  const onDeletePicture = ({ target }) => {
    if (target.id === productPic1) {
      setWsProductPictures(wSProductPictures.filter((pic) => pic !== productPic1));
      setProductPic1('');
    }
    if (target.id === productPic2) {
      setWsProductPictures(wSProductPictures.filter((pic) => pic !== productPic2));
      setProductPic2('');
    }
    if (target.id === productPic3) {
      setWsProductPictures(wSProductPictures.filter((pic) => pic !== productPic3));
      setProductPic3('');
    }
    if (target.id === productPic4) {
      setWsProductPictures(wSProductPictures.filter((pic) => pic !== productPic4));
      setProductPic4('');
    }
    if (target.id === productPic5) {
      setWsProductPictures(wSProductPictures.filter((pic) => pic !== productPic5));
      setProductPic5('');
    }
  };

  React.useEffect(() => {
    if (productPic1 !== '') {
      setWsProductPictures([productPic1, ...wSProductPictures]);
    }
  }, [productPic1]);

  React.useEffect(() => {
    if (productPic2 !== '') {
      setWsProductPictures([...wSProductPictures, productPic2]);
    }
  }, [productPic2]);

  React.useEffect(() => {
    if (productPic3 !== '') {
      setWsProductPictures([...wSProductPictures, productPic3]);
    }
  }, [productPic3]);

  React.useEffect(() => {
    if (productPic4 !== '') {
      setWsProductPictures([...wSProductPictures, productPic4]);
    }
  }, [productPic4]);

  React.useEffect(() => {
    if (productPic5 !== '') {
      setWsProductPictures([...wSProductPictures, productPic5]);
    }
  }, [productPic5]);

  return (
    <div id="wannaSellBlock5">
      <div id="wannaSellBlock5-1">
        <div className="eachProductPicUploaderContainer">
          <img
            src={ productPic1 !== '' ? productPic1 : productPicDefault }
            alt="1ª Foto do produto"
          />
          <label htmlFor="productPicUploaderInput1">
            {productPic1 === '' ? ADD_PIC : CHANGE_PIC}
            <input
              id="productPicUploaderInput1"
              type="file"
              onChange={ onSelectPicture }
              accept="image/*"
            />
          </label>
          <button
            className="removeProductPicture"
            id={ productPic1 }
            type="button"
            onClick={ onDeletePicture }
            hidden={ productPic1 === '' }
          >
            remover
          </button>
        </div>
        <div className="eachProductPicUploaderContainer">
          <img
            src={ productPic2 !== '' ? productPic2 : productPicDefault }
            alt="2ª Foto do produto"
          />
          <label htmlFor="productPicUploaderInput2">
            {productPic2 === '' ? ADD_PIC : CHANGE_PIC}
            <input
              id="productPicUploaderInput2"
              type="file"
              onChange={ onSelectPicture }
              accept="image/*"
            />
          </label>
          <button
            className="removeProductPicture"
            id={ productPic2 }
            type="button"
            onClick={ onDeletePicture }
            hidden={ productPic2 === '' }
          >
            remover
          </button>
        </div>
        <div className="eachProductPicUploaderContainer">
          <img
            src={ productPic3 !== '' ? productPic3 : productPicDefault }
            alt="3ª Foto do produto"
          />
          <label htmlFor="productPicUploaderInput3">
            {productPic3 === '' ? ADD_PIC : CHANGE_PIC}
            <input
              id="productPicUploaderInput3"
              type="file"
              onChange={ onSelectPicture }
              accept="image/*"
            />
          </label>
          <button
            className="removeProductPicture"
            id={ productPic3 }
            type="button"
            onClick={ onDeletePicture }
            hidden={ productPic3 === '' }
          >
            remover
          </button>
        </div>
      </div>

      <div id="wannaSellBlock5-2">
        <div className="eachProductPicUploaderContainer">
          <img
            src={ productPic4 !== '' ? productPic4 : productPicDefault }
            alt="4ª Foto do produto"
          />
          <label htmlFor="productPicUploaderInput4">
            {productPic4 === '' ? ADD_PIC : CHANGE_PIC}
            <input
              id="productPicUploaderInput4"
              type="file"
              onChange={ onSelectPicture }
              accept="image/*"
            />
          </label>
          <button
            className="removeProductPicture"
            id={ productPic4 }
            type="button"
            onClick={ onDeletePicture }
            hidden={ productPic4 === '' }
          >
            remover
          </button>
        </div>
        <div className="eachProductPicUploaderContainer">
          <img
            src={ productPic5 !== '' ? productPic5 : productPicDefault }
            alt="5ª Foto do produto"
          />
          <label htmlFor="productPicUploaderInput5">
            {productPic5 === '' ? ADD_PIC : CHANGE_PIC}
            <input
              id="productPicUploaderInput5"
              type="file"
              onChange={ onSelectPicture }
              accept="image/*"
            />
          </label>
          <button
            className="removeProductPicture"
            id={ productPic5 }
            type="button"
            onClick={ onDeletePicture }
            hidden={ productPic5 === '' }
          >
            remover
          </button>
        </div>
      </div>
    </div>
  );
}

WannaSellBlock5.propTypes = {
  wSProductPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  setWsProductPictures: PropTypes.func.isRequired,
};

export default WannaSellBlock5;
