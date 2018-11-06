import { useEffect, useState } from 'react';

export function useInput (initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  return {
    value, onChange: handleChange
  };
}

export function useDocumentTitle (initialValue) {
  useEffect(() => (document.title = initialValue), [initialValue]);
}

export function useObservable (observable, initialValue) {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
      const sub = observable.subscribe({ next: setValue });
      return () => sub.unsubscribe();
    },
    [observable]
  );
  return value;
}

