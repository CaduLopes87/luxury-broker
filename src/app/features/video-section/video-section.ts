import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-section',
  imports: [],
  templateUrl: './video-section.html',
  styleUrl: './video-section.scss',
})
export class VideoSection {
   videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  @Input() set videoId(id: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}`
    );
  }
}
