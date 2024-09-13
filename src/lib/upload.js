import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
const storage = getStorage();

const upload = async (file) => {
  // Create the file metadata
  /** @type {any} */
  const metadata = {
    contentType: "image/jpeg",
  };

  const date = new Date();

  const storageRef = ref(storage, `images/${date + file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file, metadata);

  return new Promise((resolve, reject) => {
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // switch (snapshot.state) {
        //   case 'paused':
        //     console.log('Upload is paused');
        //     break;
        //   case 'running':
        //     console.log('Upload is running');
        //     break;
        // }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            reject(
              "User doesn't have permission to access the object" + error.code
            );
            break;
          case "storage/canceled":
            reject("User canceled the upload." + error.code);
            break;

          // ...

          case "storage/unknown":
            reject("Unknown error occurred, inspect error.serverResponse");
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

export default upload;
