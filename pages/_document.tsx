import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import NextDocument from 'next/document';

import mem from 'mem';
import { minify as terser } from 'terser';

const minify = mem(terser);

function restoreAppState() {
  const layout = window.localStorage.getItem('layout');
  try {
    if (layout === 'compact') {
      document.body.setAttribute('data-layout', 'compact');
    }
  } catch (err) {
    console.log('RestoreAppState', err);
  }
}

const stringifiedFn = /* javascript */ `
  (function() {
    ${restoreAppState.toString()}
    restoreAppState();
  })()
`;

class Document extends NextDocument {
  static code: string;

  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx);

    const result = (await minify(stringifiedFn)).code;
    if (result) Document.code = result;

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <script
            id="themePreconfig"
            dangerouslySetInnerHTML={{ __html: Document.code }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
