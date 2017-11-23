import { rendererChannels } from '../channels';

export default function (event) {
  const user = {
    name: 'Peter',
    id: 1,
  };
  event.sender.send(rendererChannels.loginSuccess, user);
}
