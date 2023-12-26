import '../styles/LoginPrimaryImage.css'
function LoginPrimaryImage(image) {
    return (
        <div className='mainimage'>
            <img src={image.mainimage} alt="logo" width="432px" height="432px" />
        </div>
    )
}

export default LoginPrimaryImage;