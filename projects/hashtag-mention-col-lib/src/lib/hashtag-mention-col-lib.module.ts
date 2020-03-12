import { NgModule } from '@angular/core';
import { HashtagMentionColorizerPipe } from './pipes/hashtag-mention-colorizer.pipe';

@NgModule({
  declarations: [HashtagMentionColorizerPipe],
  imports: [],
  providers: [HashtagMentionColorizerPipe],
  exports: [HashtagMentionColorizerPipe]
})
export class HashtagMentionColLibModule {}
