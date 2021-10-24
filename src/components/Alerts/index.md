### Button:

```jsx
import Alerts from 'components/Alerts';

const messages = [
  {
    type: 'success',
    text: 'Success',
  },
  {
    type: 'error',
    text: 'Error',
  },
  {
    type: 'warning',
    text: 'Warning',
  },
  {
    type: 'info',
    text: 'Info',
  },
];

<div style={{ position: 'relative', height: '500px' }}>
  <Alerts messages={messages} hideMessage={(message) => alert(`${message.text} hiden`)} />
</div>;
```
