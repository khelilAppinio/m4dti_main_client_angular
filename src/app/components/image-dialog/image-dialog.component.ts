import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'm4dti-image-dialog',
	templateUrl: './image-dialog.component.html',
	styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent implements OnInit {


	constructor(
		public dialogRef: MatDialogRef<ImageDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { imageUrl: string }
	) { }
	ngOnInit(): void {

	}
	onClose(): void {
		this.dialogRef.close();
	}

}
