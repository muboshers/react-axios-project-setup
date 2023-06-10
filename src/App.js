import './App.css';
import useLocales from './hooks/useLocales';
import LazyLoadImage from './components/lazy-load-image';

function App() {
  const { t } = useLocales();
  return (
    <div className='App'>
      <h1>{t('Hello World')}</h1>

      <LazyLoadImage
        alt={'dedede'}
        effect='blur'
        src={
          'https://images.immediate.co.uk/production/volatile/sites/4/2021/08/mountains-7ddde89.jpg?quality=90&resize=768,574'
        }
      />
    </div>
  );
}

export default App;
