import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import ImageIcon from '@material-ui/icons/Image';
import { FormattedMessage } from 'react-intl';
import { ThemeProvider } from '@material-ui/core/styles';
import { FileAddFilled, LoadingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import { NumberFormatCustom } from '../shared/utility';
import { defaultTheme, modalStyles, getModalStyle } from '../styles/materialui';

const AddProductModal = ({reset, addProduct, loading, open, handleClose}) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [fileLocalURL, setFileLocalURL] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    resetState();
  }, [reset]);

  const classes = modalStyles();

  const onTitleChanged = () => (event) => {
    setTitle(event.target.value);
  };

  const onDescriptionChanged = () => (event) => {
    setDescription(event.target.value);
  };

  const onPriceChanged = (event) => {
    setPrice(event.target.value);
  };

  const handleChange = (event) => {
    if (file) {
      URL.revokeObjectURL(file);
    }
    setFileLocalURL(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
  };

  const resetState = () => {
    if (file) {
      URL.revokeObjectURL(file);
    }

    setTitle('');
    setDescription('');
    setPrice('');
    setFileLocalURL(null);
    setFile(null);
  };

  const onAddButtonClicked = () => {
    const product = {
      title,
      description,
      price: Number(price),
      image: file,
    };
    addProduct(product);
  };

  const body = (
    <ThemeProvider theme={defaultTheme}>
      <div style={modalStyle} className={classes.paper}>

        <div class="flex">
          <p class="flex-1 font-bold text-2xl">
            <FormattedMessage id="add-a-new-product" />
          </p>

          <Button
            type="primary"
            shape="round"
            size="large"
            disabled={loading}
            onClick={() => onAddButtonClicked()}
          >
            <div class="flex items-center">
              {loading ? <LoadingOutlined /> : <FileAddFilled />}

              <div class="pl-2">
                <FormattedMessage id="add-product" />
              </div>

            </div>
          </Button>

        </div>

        <div class="mt-4"><Input placeholder="Product title e.g. iPhone 12" onChange={onTitleChanged('inputText')} /></div>
        <div class="mt-4"><Input placeholder="Product description" onChange={onDescriptionChanged('inputText')} /></div>

        <div class="mt-4 flex items-center w-48">
          <TextField
            placeholder="Product price"
            onChange={onPriceChanged}
            value={price}
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
          />
        </div>

        <div class="flex pt-2 items-center mb-4 mt-4">
          <p class="font-medium text-xl mb-0 mr-4"><FormattedMessage id="product-picture" /></p>

          <label htmlFor="file-input">
            <div class="flex cursor-pointer hover:bg-secondaryLight rounded-full w-8 h-8 justify-center items-center"><ImageIcon /></div>
          </label>

          <input id="file-input" class="hidden" type="file" onChange={handleChange} />
        </div>

        {fileLocalURL ? <div><img class="rounded-3xl mb-4 mx-auto" src={fileLocalURL} alt="uploadedImage" /></div> : null}
      </div>
    </ThemeProvider>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      {body}
    </Modal>
  );
};

export default AddProductModal;
