import React, { Component } from "react";

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    }

    return (
      <div>
        <div>
          <input type="file" onChange={this._handleImageChange} />
          <button
            className="btn btn-success"
            id="uploadbtn"
            type="submit"
            onClick={this._handleSubmit}
          >
            Upload Image
          </button>
          {$imagePreview}
        </div>
      </div>
    );
  }
}

export default UploadForm;
