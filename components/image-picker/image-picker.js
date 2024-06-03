import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {
            !pickedImage ?
              <p>No image picked yet</p>
              : <Image src={pickedImage} alt='Picked Image' fill />
          }
        </div>
        <input
          className={classes.input}
          type='file'
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
          required
        />
        <button
          className={classes.button}
          type='button'
          onClick={() => imageInputRef.current.click()}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
