### Button:

```jsx
import { ThemeProvider } from 'styled-components';
import Alerts from 'components/Alerts';
import { light } from 'styles/themes';
const messages = [
  { type: 'success', text: 'Success' },
  { type: 'error', text: 'Error' },
  { type: 'warning', text: 'Warning' },
  { type: 'info', text: 'Info' },
];
<div style={{ position: 'relative', height: '500px' }}>
  <ThemeProvider theme={{ colors: light }}>
    <Alerts messages={messages} hideMessage={(message) => alert(`${message.text} hiden`)} />
  </ThemeProvider>
</div>;
```
