import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'hashtagMentionColorizer'
})
export class HashtagMentionColorizerPipe implements PipeTransform {
  twitterColor = '#1ca1f3';

  constructor(private sanitizer: DomSanitizer) {}

  transform(text: any, color?: string): any {
    let tempString: string;
    const newText = text.split(/\s+/);
    const mentions = newText.filter(el => el[0] === '#' || el[0] === '@');
    for (const [index, value] of newText.entries()) {
      for (const mention of mentions) {
        if (
          value === mention ||
          value === mention + '.' ||
          // tslint:disable-next-line: quotemark
          value === mention + "'s"
        ) {
          newText.splice(
            index,
            1,
            `<p style="color: ${
              color ? color : this.twitterColor
            }; display: inline;">${value}</p>`
          );
        }
      }
    }
    tempString = newText.join(' ');
    return this.sanitizer.bypassSecurityTrustHtml(tempString);
  }
}
