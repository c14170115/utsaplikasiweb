import { Injectable } from '@angular/core';

import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
         CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public path:String="";
  public path2:string="";
  public path3:string="";
  public dataFoto:any;
  constructor() { }
  public async addNewToGallery() {
	  // Take a photo
	   const capturedPhoto = await Camera.getPhoto({
	    resultType:  CameraResultType.Uri,
	    source: CameraSource.Camera, 
	    quality: 100 
	  });
	  console.log(capturedPhoto)
	  var testA=new Date().getTime()+".jpeg"
	  /*
	  const sFile=await Filesystem.writeFile({
	  	path:this.path2,
	  	data:capturedPhoto.base64String,
	  	directory:FilesystemDirectory.Data
	  })*/

	  this.path2=capturedPhoto.webPath

	  const response = await fetch(capturedPhoto.webPath)
	  const blob = await response.blob()
	  this.dataFoto=new File([blob],testA,{
	  	type:"image/jpeg"
	  })
	  console.log(blob)
	  //console.log(dataFoto)
	  /*
	  Filesystem.writeFile({
	         	path:this.path2,
			  	data:capturedPhoto.base64String,
			  	directory:FilesystemDirectory.Data
	        }).then(
	          () => {
	            Filesystem.getUri({
	              directory: FilesystemDirectory.Data,
	              path: this.path2
	            }).then(
	              result => {
	                let path = Capacitor.convertFileSrc(result.uri);
	                this.path3 = path
	                console.log('path akhir ',result);
	              },
	              err => {
	                console.log('err',err);
	              }
	            );
	          },
	          err => {
	            console.log('err',err);
	          }
	   );*/

	  
	  //console.log(sFile)
	  //this.path2=sFile.uri
	  //console.log(capturedPhoto)
	  //console.log('sfile',sFile)
	  //console.log('Path 2',this.path2)
	  //this.path2=capturedPhoto.base64String;
	  //this.path='data:image/png;base64,'+capturedPhoto.base64String;
	  console.log(this.path2)
	  return this.path2

  }

}


export interface Photo {
  filepath: string;
  webviewPath: string;
}