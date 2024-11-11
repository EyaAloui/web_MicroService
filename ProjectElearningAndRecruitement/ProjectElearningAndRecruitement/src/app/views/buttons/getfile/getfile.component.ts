import { File } from './../../../ModelCourse/File';
import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/Service/cours.service';

@Component({
  selector: 'app-getfile',
  templateUrl: './getfile.component.html',
  styleUrl: './getfile.component.scss'
})
export class GetfileComponent implements OnInit {
  public files: File[] = [];
  constructor(private service : CoursService) {}
  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.service.getFiles()
      .subscribe(files => this.files = files);
  }


  deleteFile(fileID: number) {
    if (confirm('Are you sure you want to delete thise file?')) {
      this.service.deleteFile(fileID).subscribe(
        () => {
          console.log('file deleted successfully');
          this.getFiles();
          alert('file deleted successfully');
        },
        (error) => {
          console.error('Error deleting Course:', error);
        }
      );
     }
    }
    assignCourse(file: File): void {
      // Logique pour affecter le fichier à un cours
      console.log('Fichier affecté à un cours :', file);
    }

}
