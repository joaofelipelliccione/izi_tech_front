import React from 'react';
import PropTypes from 'prop-types';
import alerts from '../../shared-functions/alerts';
import productPicDefault from '../../images/product-picture.png';

function WannaSellBlock5({
  wSProductPictures, setWsProductPictures,
}) {
  const [picPreview1, setPicPreview1] = React.useState('');
  const [productPic1, setProductPic1] = React.useState('');
  const [picPreview2, setPicPreview2] = React.useState('');
  const [productPic2, setProductPic2] = React.useState('');
  const [picPreview3, setPicPreview3] = React.useState('');
  const [productPic3, setProductPic3] = React.useState('');
  const [productPic4, setProductPic4] = React.useState('');
  const [productPic5, setProductPic5] = React.useState('');

  const structureArray = [
    [
      { id: 1, productPicX: productPic1, picPreviewX: picPreview1 },
      { id: 2, productPicX: productPic2, picPreviewX: picPreview2 },
      { id: 3, productPicX: productPic3, picPreviewX: picPreview3 },
    ],
    [
      { id: 4, productPicX: productPic4 },
      { id: 5, productPicX: productPic5 },
    ],
  ];

  const onSelectPicture = ({ target }) => {
    const imgSize = target.files[0].size;
    const TWO_MB = 2000000;

    if (imgSize <= TWO_MB) {
      if (target.id === 'productPicUploaderInput1') {
        setPicPreview1(URL.createObjectURL(target.files[0]));
        setProductPic1(target.files[0]);
        target.value = '';
      }
      if (target.id === 'productPicUploaderInput2') {
        setPicPreview2(URL.createObjectURL(target.files[0]));
        setProductPic2(target.files[0]);
        target.value = '';
      }
      if (target.id === 'productPicUploaderInput3') {
        setPicPreview3(URL.createObjectURL(target.files[0]));
        setProductPic3(target.files[0]);
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
    } else {
      alerts('imgTooBig');
    }
  };

  const onDeletePicture = ({ target }) => {
    if (Number(target.id) === productPic1.lastModified) {
      setWsProductPictures(wSProductPictures
        .filter(({ lastModified }) => lastModified !== productPic1.lastModified));
      setPicPreview1('');
      setProductPic1('');
    }
    if (Number(target.id) === productPic2.lastModified) {
      setWsProductPictures(wSProductPictures
        .filter(({ lastModified }) => lastModified !== productPic2.lastModified));
      setPicPreview2('');
      setProductPic2('');
    }
    if (Number(target.id) === productPic3.lastModified) {
      setWsProductPictures(wSProductPictures
        .filter(({ lastModified }) => lastModified !== productPic3.lastModified));
      setPicPreview3('');
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
        {structureArray[0].map(({ id, productPicX, picPreviewX }) => (
          <div className="eachProductPicUploaderContainer" key={ id }>
            { productPicX !== '' ? (
              <img
                src={ picPreviewX === '' ? productPicX : picPreviewX }
                alt={ `${id}ª Foto Default` }
              />
            ) : (
              <img
                src={ picPreviewX === '' ? productPicDefault : picPreviewX }
                alt={ `${id}ª Foto do produto` }
              />
            )}
            <label htmlFor={ `productPicUploaderInput${id}` }>
              adicionar foto!
              <input
                id={ `productPicUploaderInput${id}` }
                type="file"
                onChange={ onSelectPicture }
                accept="image/*"
                disabled={ productPicX !== '' }
              />
            </label>
            <button
              className="removeProductPicture"
              id={ productPicX.lastModified }
              type="button"
              onClick={ onDeletePicture }
              hidden={ productPicX === '' }
            >
              remover
            </button>
          </div>
        ))}
      </div>

      <div id="wannaSellBlock5-2">
        {structureArray[1].map(({ id, productPicX }) => (
          <div key={ id } className="eachProductPicUploaderContainer">
            <img
              src={ productPicX !== '' ? productPicX : productPicDefault }
              alt={ `${id}ª Foto do produto` }
            />
            <label htmlFor={ `productPicUploaderInput${id}` }>
              adicionar foto!
              <input
                id={ `productPicUploaderInput${id}` }
                type="file"
                onChange={ onSelectPicture }
                accept="image/*"
                disabled={ productPicX !== '' }
              />
            </label>
            <button
              className="removeProductPicture"
              id={ productPicX.lastModified }
              type="button"
              onClick={ onDeletePicture }
              hidden={ productPicX === '' }
            >
              remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

WannaSellBlock5.propTypes = {
  wSProductPictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  setWsProductPictures: PropTypes.func.isRequired,
};

export default WannaSellBlock5;
