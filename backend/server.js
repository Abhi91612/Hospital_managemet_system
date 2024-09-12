import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_CLOUD_KEY,
    api_secret:process.env.LOUDINARY_CLOUD_SECRET,
})



app.listen(process.env.PORT,() => {
console.log(`Server listenning on port ${process.env.PORT}`);
});