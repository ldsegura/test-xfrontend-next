import i18nConfig from '../../i18nConfig';
import LayoutBasic from './layouts/LayoutBasic';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children, params }) {

  return (
    <LayoutBasic
    params={{...params, locale: i18nConfig.defaultLocale}}
    >
      {children}
    </LayoutBasic>
  )
}