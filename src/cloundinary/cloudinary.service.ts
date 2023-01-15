import { Injectable } from '@nestjs/common';
//import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { v2 } from 'cloudinary';

// import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
//   async uploadImage(
//     file: Express.Multer.File,
//   ): Promise<UploadApiResponse | UploadApiErrorResponse> {
//     return new Promise((resolve, reject) => {
//       const upload = v2.uploader.upload_stream((error, result) => {
//         if (error) return reject(error);
//         resolve(result);
//       });
//       toStream(file.buffer).pipe(upload);
//     });
//   }
    async uploadFile(url: string){
        try {
            return await v2.uploader
                .upload(url, { allowed_formats: ['xlsx', 'csv', 'png', 'jpg'] })
                .then((result) => result.url)
        } catch (error) {
            console.log("Upload: ", error)
            return error
        }
    }
}