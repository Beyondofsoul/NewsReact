import { useTheme } from '@/app/providers/ThemeProvider';
import { HomePage } from '@/pages/Main';

import { Header } from '@/widgets/header/ui';

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <Header />
      <div className="container">
        <HomePage />
      </div>
    </div>
  );
}

export default BaseLayout;
