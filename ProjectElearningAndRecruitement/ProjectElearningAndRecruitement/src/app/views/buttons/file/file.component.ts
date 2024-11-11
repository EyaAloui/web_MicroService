import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Course } from 'src/app/ModelCourse/Course';
import { CoursService } from 'src/app/Service/cours.service';

@Component({
  selector: 'app-file',
  standalone: true,
  imports: [],
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {
   fileBits: BlobPart[] = ['Contenu du fichier']; // Les données du fichier
 fileName: string = ''; // Le nom du fichier
 contentType: string = '';
 file: File = new File(this.fileBits, this.fileName);


  selectedFile: File | undefined;
  uploadProgress: number | undefined;
  
  constructor(private service : CoursService) {}

   onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.service.addFile(this.selectedFile)
        .subscribe(progress => {
          this.uploadProgress = progress;
          if (progress === 100) {
            alert("Téléchargement du fichier terminé avec succès");
            this.selectedFile = undefined;
          }
        });
    }
  }


 /* uploadFile(): void {
    if (this.selectedFile) {
      this.service.uploadFile(this.selectedFile)
        .subscribe(progress => {
          this.uploadProgress = progress;
          if (progress === 100) {
            alert("File upload completed")
            // File upload completed
            this.selectedFile = undefined;
          }
        });
    }
  }*/

  
  
  


}
