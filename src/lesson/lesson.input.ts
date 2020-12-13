import { Field, InputType } from '@nestjs/graphql';
import { MinLength, isDateString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(4)
  @Field()
  name: string;

  //   @isDateString()
  @Field()
  startDate: string;

  //   @isDateString()
  @Field()
  endDate: string;
}
