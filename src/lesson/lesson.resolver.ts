import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
  @Query(returns => LessonType)
  lesson() {
    return {
      id: 'random',
      name: 'Dev class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
