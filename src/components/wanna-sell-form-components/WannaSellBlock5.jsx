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

  const structureArray = [
    [
      { id: 1, productPicX: productPic1 },
      { id: 2, productPicX: productPic2 },
      { id: 3, productPicX: productPic3 },
    ],
    [
      { id: 4, productPicX: productPic4 },
      { id: 5, productPicX: productPic5 },
    ],
  ];

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
        {structureArray[0].map(({ id, productPicX }) => (
          <div className="eachProductPicUploaderContainer" key={ id }>
            <img
              src={ productPicX !== '' ? productPicX : productPicDefault }
              alt={ `${id}ª Foto do produto` }
            />
            <label htmlFor={ `productPicUploaderInput${id}` }>
              {productPicX === '' ? ADD_PIC : CHANGE_PIC}
              <input
                id={ `productPicUploaderInput${id}` }
                type="file"
                onChange={ onSelectPicture }
                accept="image/*"
              />
            </label>
            <button
              className="removeProductPicture"
              id={ productPicX }
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
              {productPicX === '' ? ADD_PIC : CHANGE_PIC}
              <input
                id={ `productPicUploaderInput${id}` }
                type="file"
                onChange={ onSelectPicture }
                accept="image/*"
              />
            </label>
            <button
              className="removeProductPicture"
              id={ productPicX }
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
