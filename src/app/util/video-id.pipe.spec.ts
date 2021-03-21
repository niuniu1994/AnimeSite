import { VideoIdPipe } from './video-id.pipe';

describe('VideoIdPipe', () => {
  it('create an instance', () => {
    const pipe = new VideoIdPipe();
    expect(pipe).toBeTruthy();
  });
});
