/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stream Net',
  tagline: 'A Kafka Client to easily connect with Kafka',
  url: 'https://github.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stream-net', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'StreamNet Project',
        // logo: {
        //   alt: 'My Meta Project Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          //TODO: adicionar o blog aqui, depois
          //{to: 'blog', label: 'Blog', position: 'left'},
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/stream-net/streamnet',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Learn',
          //   items: [
          //     {
          //       label: 'Style Guide',
          //       to: 'docs/',
          //     },
          //     {
          //       label: 'Second Doc',
          //       to: 'docs/doc2',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/streamnet',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
              {
                label: 'Telegram',
                href: 'https://t.me/+s-G6Sor5F5xiYTFh',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: 'blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/stream-net/streamnet',
              },
            ],
          },
          // {
          //   title: 'Legal',
          //   // Please do not remove the privacy and terms, it's a legal requirement.
          //   items: [
          //     {
          //       label: 'Privacy',
          //       href: 'https://opensource.fb.com/legal/privacy/',
          //     },
          //     {
          //       label: 'Terms',
          //       href: 'https://opensource.fb.com/legal/terms/',
          //     },
          //     {
          //       label: 'Data Policy',
          //       href: 'https://opensource.fb.com/legal/data-policy/',
          //     },
          //     {
          //       label: 'Cookie Policy',
          //       href: 'https://opensource.fb.com/legal/cookie-policy/',
          //     },
          //   ],
          // },
        ],
        // logo: {
        //   alt: 'Meta Open Source Logo',
        //   // This default includes a positive & negative version, allowing for
        //   // appropriate use depending on your site's style.
        //   src: '/img/meta_opensource_logo_negative.svg',
        //   href: 'https://opensource.fb.com',
        // },
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `MIT Licensed | Copyright ?? ${new Date().getFullYear()} Ot??vio Larrosa.`,
      },
    }),
};

module.exports = config;
