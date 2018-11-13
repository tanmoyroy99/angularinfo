import { Day2dayModule } from './day2day.module';

describe('Day2dayModule', () => {
  let day2dayModule: Day2dayModule;

  beforeEach(() => {
    day2dayModule = new Day2dayModule();
  });

  it('should create an instance', () => {
    expect(day2dayModule).toBeTruthy();
  });
});
