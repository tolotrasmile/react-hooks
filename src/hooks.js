import { useEffect, useState } from 'react';

/**
 * Input custom hooks
 * From the Dan speaks at ReactConf 2018 https://www.youtube.com/watch?v=dpw9EHDh2bM
 * @param initialValue
 * @returns {{value, onChange: handleChange}}
 */
export function useInput (initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  return {
    value, onChange: handleChange
  };
}

/**
 * Document title custom hooks
 * From the Dan speaks at ReactConf 2018 https://www.youtube.com/watch?v=dpw9EHDh2bM
 */
export function useDocumentTitle (initialValue) {
  useEffect(() => (document.title = initialValue), [initialValue]);
}

/**
 * Custom hooks for Observables
 * @param observable
 * @param initialValue
 */
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

/**
 * Custom hooks for keyCode
 */
export function useKeyCode () {
  const [value, setValue] = useState(null);
  useEffect(() => {
    const listener = ({ code }) => setValue(code)
    document.addEventListener('keydown', listener);
    return function () {
      document.removeEventListener('keydown', listener);
    }
  });
  return value;
}
