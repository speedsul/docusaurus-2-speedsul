module.exports = {
  title: 'SpeedSul',
  tagline: 'Site em desenvolvimento',
  url: 'https://speedsul.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'SpeedSul', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SpeedSul',
      logo: {
        alt: 'SpeedSul contabil',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Sobre',
          position: 'left',
        },
        {to: 'services', label: 'Serviços', position: 'left'},
        {
          href: 'https://speedsul/contato',
          label: 'Contato',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Serviços',
          items: [
            {
              label: 'Nota fiscal',
              to: '/fiscal',
              title: 'Nota fiscal eletronica'
            },
            {
              label: 'Outros assuntos',
              to: 'contato/outros',
              title: 'Outros assuntos'
            },
          ],
        },
        {
          title: 'Redes Sociais',
          items: [
            {
              label: 'Nossa Empresa',
              href: '/nossa-empresa',
              title: 'Nossa Epmresa',
            },
            {
              label: 'Facebook',
              href: '/facebook',
              title: 'Facebook'
            },
            {
              label: 'Instagram',
              href: '/instagran',
              title: 'Instagram'
            },
          ],
        },
        {
          title: 'Links Uteis',
          items: [
            {
              label: 'Contato',
              to: 'contato',
            },
            {
              label: 'Acesso Remoto',
              href: 'https://download.anydesk.com/AnyDesk.exe?_ga=2.9706549.1231778997.1605359504-558363078.1605359504',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} speedsul.com.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
