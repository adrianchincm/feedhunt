import React, {useState} from 'react'
import InputBase from '@material-ui/core/InputBase';
import ImageIcon from '@material-ui/icons/Image';
import EmbedProductModal from './EmbedProductModal'
import Modal from '@material-ui/core/Modal';
import ProductRow from './ProductRow';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import { modalStyles, getModalStyle } from '../styles/materialui'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'
import { FormattedMessage } from 'react-intl';

const ComposeHeader = props => {

    const [content, setContent] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)
    const [fileLocalURL, setFileLocalURL] = useState(null)
    const [file, setFile] = useState(null)    
    const [open, setOpen] = useState(false);
    const [embeddedProducts, setEmbeddedProducts] = useState([]);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const createPost = async () => {
        setButtonLoading(true)

        var postObj = {
            content,
            image: file
        }

        try {
            await authApi(END_POINTS.create_post, {
                method: HTTP_POST,
                body: postObj
            })

            setButtonLoading(false)
            props.refreshFeed()
            resetState()
        } catch (e) {
            console.log(e)
        }        
        
    }

    const resetState = () => {
        setContent('')
        setFile(null)
        setFileLocalURL(null)
        URL.revokeObjectURL(file)
    }

    const onContentChanged = text => event => {
        setContent(event.target.value);    
    }

    const handleChange = (event) => {        
        if (file) {
            URL.revokeObjectURL(file)
        }
        setFileLocalURL(URL.createObjectURL(event.target.files[0]))
        setFile(event.target.files[0])        
    }

    const onProductClicked = (product) => {        
        setEmbeddedProducts(prevArray => [...prevArray, product])
        handleClose()
    }

    const removeEmbeddedProduct = (clickedProduct) => {
        setEmbeddedProducts(prevArray => prevArray.filter((product) => product._id !==  clickedProduct._id))
    }

    return (
        
        <div class="p-4 border-solid border-b border-dividerGray">
            <div class="text-left">
                <InputBase 
                    placeholder="What do you want to share?"
                    inputProps={{style: {fontSize: 20, color: 'white', width: '420px', lineHeight: '1.6'}}}                    
                    multiline
                    value={content}
                    onChange={onContentChanged('inputText')}
                />
            </div>

            <div class="text-left">
                {embeddedProducts && embeddedProducts.map((product) => {
                    return <ProductRow 
                        product={product}
                        onProductClick={removeEmbeddedProduct}
                        />
                })}
            </div>                    

            {fileLocalURL ? <div><img class="rounded-3xl mb-4 mx-auto" src={fileLocalURL} alt="uploadedImage"/></div> : null}       

            <div class="flex text-right">

                <div class=" pt-2">
                    <label htmlFor="file-input">                    
                        <div class="flex cursor-pointer hover:bg-secondaryLight rounded-full w-8 h-8 justify-center items-center"><ImageIcon /></div>                                            
                    </label>

                    <input id="file-input" class="hidden" type="file" onChange={handleChange}/>                                        
                </div>

                <div class="flex-1 pt-2 ml-2">
                
                    <div class="flex cursor-pointer hover:bg-secondaryLight 
                        rounded-full w-8 h-8 justify-center items-center" onClick={() => handleOpen()}><LibraryBooksSharpIcon /></div>                                                                                

                </div>

                <Button 
                    type="primary"
                    shape="round" 
                    icon={<SendOutlined />} 
                    size="large"
                    loading={buttonLoading}
                    disabled={content.length === 0} 
                    onClick={() => createPost()}>
                    Post
                </Button>

                <EmbedProductModal 
                    open={open}                 
                    handleClose={handleClose}
                    onProductClick={onProductClicked}
                />
            </div>                        
        </div>
    );
}

export default ComposeHeader;