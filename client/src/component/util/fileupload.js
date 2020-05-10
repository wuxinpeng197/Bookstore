import React, { Component } from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';
import axios from 'axios';
import MyButton from '../util/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import { CircularProgress } from '@material-ui/core'

class Fileupload extends Component {
    constructor() {
        super();
        this.state = {
            uploadedFiles: [],
            uploading: false
        }
    }

    getUploadParams = ({files, meta}) => {
        let formData = new FormData();
        formData.append("file", files);
        // this.setState({ 
        //     uploadedFiles:files 
        // });
        console.log('state',this.state.uploadedFiles)
        return { url: '/api/users/uploadimage', formData }
      }
    
    handleChangeStatus = ({ meta }, status) => {
        console.log(status, meta)
      }
    
    handleSubmit = (files,allFiles) => {
        console.log('files',files.meta)
        this.setState({ 
            uploadedFiles: files.meta 
        });

        console.log('submit',files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
        console.log('state',this.state.uploadedFiles)
      }

    static getDerivedStateFromProps(props, state) {
        if (props.reset) {
            return state = {
                uploadedFiles: []
            }
        }
        return null;
    }

    showUploadedImages = () => (
        
        this.state.uploadedFiles.map(item=>(
            <div className="dropzone_box"
                key={item.public_id}
                onClick={()=> this.onRemove(item.public_id)}
            >
                <div 
                    className="wrap"
                    style={{background:`url(${item.url}) no-repeat`}}
                >
                </div>
            </div>
        ))
    )
    
    onRemove = (id) => {
        axios.get(`/api/users/removeimage?public_id=${id}`).then(response=>{
            let images = this.state.uploadedFiles.filter(item=>{
                return item.public_id !== id;
            });

            this.setState({
                uploadedFiles: images
            },()=>{
                this.props.imagesHandler(images)
            })
        })
    }

    render() {
        return (
            <div>
                <section>
                    <div className="dropzone clear">
                        <div className="label_inputs">Upload images</div>
                        <Dropzone
                            maxFiles={2}
                            submitButtonDisabled={files => files.length < 2}
                            getUploadParams={(e)=>this.getUploadParams(e)}
                            onChangeStatus={({ remove }, status) => this.handleChangeStatus(remove,status)}
                            onSubmit={(e,r)=>this.handleSubmit(e,r)}
                            styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}/>

                    </div>
                </section>
            </div>
        );
    }
}

export default Fileupload;