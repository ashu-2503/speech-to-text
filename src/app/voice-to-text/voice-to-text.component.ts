import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-to-text',
  templateUrl: './voice-to-text.component.html',
  styleUrls: ['./voice-to-text.component.css']
})
export class VoiceToTextComponent {

  convertText: string = '';

  constructor() { }

  // ngOnInit(): void { }

  clickToRecord(): void {
    console.log("Clicked!!!");
    
    const speechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    // const speechRecognition = (window as any).webkitSpeechRecognition;
    
    if (!speechRecognition) {
      alert('Speech Recognition not supported on this browser.');
      return;
    }
  
    const recognition = new speechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-IN";
    // recognition.lang = "hi-IN";


    recognition.addEventListener('result', (e: any) => {
      console.log(e,'E');
      
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');

      this.convertText = transcript;
      console.log(transcript);
    });

    recognition.start();
  }

}
