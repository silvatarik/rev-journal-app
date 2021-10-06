export const fileUpload = async (file) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dlwi1zfxv/upload';
    const formData = new FormData();
    formData.append('upload_preset','journalApp');
    formData.append('file',file);


    try {
        const resp = await fetch(cloudUrl, {
            method:'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResponse = await resp.json();
            return cloudResponse.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
        console.log(error)
        throw error;
    }
}