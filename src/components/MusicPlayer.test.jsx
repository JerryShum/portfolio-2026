import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MusicPlayer from './MusicPlayer';
import { playlist } from '../data/music';

// jsdom does not implement media playback, so both methods are stubbed.
let playMock;
let pauseMock;

beforeEach(() => {
   playMock = vi
      .spyOn(window.HTMLMediaElement.prototype, 'play')
      .mockImplementation(() => Promise.resolve());
   pauseMock = vi
      .spyOn(window.HTMLMediaElement.prototype, 'pause')
      .mockImplementation(() => {});
});

// The controls are icon-only, so they are found by their accessible names.
const previousButton = () =>
   screen.getByRole('button', { name: 'Previous track' });
const nextButton = () => screen.getByRole('button', { name: 'Next track' });
const playPauseButton = () =>
   screen.getByRole('button', { name: /^(play|pause)$/i });

describe('MusicPlayer', () => {
   it('shows the first track by default', () => {
      render(<MusicPlayer />);

      expect(screen.getByText(playlist[0].title)).toBeInTheDocument();
      expect(screen.getByText(playlist[0].artist)).toBeInTheDocument();
   });

   it('advances to the next track', async () => {
      const user = userEvent.setup();
      render(<MusicPlayer />);

      await user.click(nextButton());

      expect(screen.getByText(playlist[1].title)).toBeInTheDocument();
   });

   it('wraps from the last track back to the first', async () => {
      const user = userEvent.setup();
      render(<MusicPlayer />);

      for (let i = 0; i < playlist.length; i += 1) {
         await user.click(nextButton());
      }

      expect(screen.getByText(playlist[0].title)).toBeInTheDocument();
   });

   it('wraps from the first track back to the last', async () => {
      const user = userEvent.setup();
      render(<MusicPlayer />);

      await user.click(previousButton());

      expect(
         screen.getByText(playlist[playlist.length - 1].title),
      ).toBeInTheDocument();
   });

   it('starts playback and then pauses it', async () => {
      const user = userEvent.setup();
      render(<MusicPlayer />);

      await user.click(playPauseButton());
      expect(playMock).toHaveBeenCalled();

      await user.click(playPauseButton());
      expect(pauseMock).toHaveBeenCalled();
   });

   it('names the transport buttons, flipping play to pause', async () => {
      const user = userEvent.setup();
      render(<MusicPlayer />);

      expect(previousButton()).toBeInTheDocument();
      expect(nextButton()).toBeInTheDocument();
      expect(playPauseButton()).toHaveAccessibleName('Play');

      await user.click(playPauseButton());

      expect(playPauseButton()).toHaveAccessibleName('Pause');
   });

   it('starts at a low volume', () => {
      render(<MusicPlayer />);
      const [volumeSlider] = screen.getAllByRole('slider');

      expect(volumeSlider).toHaveValue('0.1');
   });

   it('applies the chosen volume to the audio element', () => {
      const { container } = render(<MusicPlayer />);
      const [volumeSlider] = screen.getAllByRole('slider');

      fireEvent.change(volumeSlider, { target: { value: '0.5' } });

      expect(container.querySelector('audio').volume).toBe(0.5);
   });

   it('points the audio element at the current track', async () => {
      const user = userEvent.setup();
      const { container } = render(<MusicPlayer />);

      expect(container.querySelector('audio')).toHaveAttribute(
         'src',
         playlist[0].src,
      );

      await user.click(nextButton());

      expect(container.querySelector('audio')).toHaveAttribute(
         'src',
         playlist[1].src,
      );
   });
});
