import React, {useState} from 'react'
import InputBase from '@material-ui/core/InputBase';
import ImageIcon from '@material-ui/icons/Image';
import Modal from '@material-ui/core/Modal';
import ProductRow from './ProductRow';
import LibraryBooksSharpIcon from '@material-ui/icons/LibraryBooksSharp';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { authApi } from '../shared/api'
import { END_POINTS }  from '../endpoints'
import { HTTP_POST }  from '../constants'

const ComposeHeader = props => {

    const [content, setContent] = useState('')
    const [buttonLoading, setButtonLoading] = useState(false)
    const [fileLocalURL, setFileLocalURL] = useState(null)
    const [file, setFile] = useState(null)
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 600,
          height: 1000,
          backgroundColor: '#282c34',
          border: '2px solid #393f4a',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          overflow: 'auto'
        },
      }));

    function getModalStyle() {
        return {
            top: '50%',
            left: '55%',
            transform: `translate(-50%, -55%)`,
        };
    }

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

    const classes = useStyles();

    const body = (
        <div style={modalStyle} className={classes.paper} >          
          <p id="simple-modal-description">
            Choose a product
          </p>

          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />
          <ProductRow />          
        </div>
    );

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

                <Modal
                    open={open}
                    onClose={handleClose} >
                    {body}
                </Modal>
            </div>                        
        </div>
    );
}

export default ComposeHeader;