export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5f762023cc8a589bd914a097',
                  title: 'Sanity Studio',
                  name: 'sanityio-gatsby-portfolio-studio',
                  apiId: 'a6e42d85-be22-44d7-b2b8-c31a6aee0e79'
                },
                {
                  buildHookId: '5f76202365f62600ff9c150d',
                  title: 'Portfolio Website',
                  name: 'sanityio-gatsby-portfolio',
                  apiId: '660f8b3d-f308-47ef-a3f7-e4952b3af3d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/snozwoz/sanityio-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanityio-gatsby-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
