import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Message } from '../models/message.model';
import { OpenaiService } from '../services/openai.service';
import { CustomValidators } from '../utils/custom-validators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild(IonContent, { static: false }) content!: IonContent;

  messages: Message[] = [];

  form = new FormGroup({
    prompt: new FormControl('', [Validators.required, CustomValidators.noWhiteSpace])
  })

  loading: boolean = false;

  constructor(
    private openAi: OpenaiService
  ) { }

  toggleChat() {
    let chatWindow = document.getElementsByClassName("chatWindow") as HTMLCollectionOf<HTMLElement>;

    if (chatWindow[0].style.height == "450px") {
      chatWindow[0].style.height = "";
      chatWindow[0].style.display = "none";
    }
    else {
      chatWindow[0].style.height = "450px";
      chatWindow[0].style.display = "revert";
    }

  }

  submit() {
    if (this.form.valid) {

      let prompt = this.form.value.prompt as string;

      let userMsg: Message = { sender: 'me', content: prompt }
      this.messages.push(userMsg);

      let botMsg: Message = { sender: 'bot', content: '' }
      this.messages.push(botMsg);

      this.scrollToBottom();
      this.form.reset();
      this.form.disable();

      this.loading = true;


      this.openAi.sendQuestion(prompt).subscribe({
        next: (res: any) => {
          this.loading = false;
          console.log(res.choices[0]);
          this.typeText(res.choices[0].message.content)
          this.form.enable();
        }, error: (error: any) => {
          console.log(error);
        }
      })
    }


  }

  typeText(text: string) {
    let textIndex = 0;
    let messagesLastIndex = this.messages.length - 1;

    let interval = setInterval(() => {
      if (textIndex < text.length) {
        this.messages[messagesLastIndex].content += text.charAt(textIndex);
        textIndex++
      } else {
        clearInterval(interval);
        this.scrollToBottom();
      }
    }, 15)
  }

  scrollToBottom() {
    this.content.scrollToBottom(2000)
  }
}
