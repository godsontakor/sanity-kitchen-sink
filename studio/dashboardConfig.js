export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e8bf16a5133500dda1b14e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-homz2hwb',
                  apiId: '0a482aa9-7a39-4454-8205-aeee4664d017'
                },
                {
                  buildHookId: '60e8bf165a853500c08e0601',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-qgisc6sg',
                  apiId: '7a38cc55-84ac-4015-a54e-96102d3cd303'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/godsontakor/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-qgisc6sg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
