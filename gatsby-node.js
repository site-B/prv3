const path = require('path'); 
const { slugify } = require('./src/utils/utilityFunctions');
const authors = require('./src/utils/authors'); 
const _ = require('lodash'); 

// single post generator
exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    if(node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node, 
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions; 
    
    
    const templates = {
        singlePost: path.resolve('./src/templates/single-post.js'),
        tagsPage: path.resolve('./src/templates/tags-page.js'),
        tagPosts: path.resolve('./src/templates/tag-post.js'),
        postList: path.resolve('./src/templates/post-list.js'),
        /* authorPosts: path.resolve('./src/templates/author-posts.js'), */ 
    } 

    const res = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter{
                            author
                            tags
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    if(res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({node}) => {
        createPage({
            path: node.fields.slug,
            component: templates.singlePost,
            context: {
                // passing slug, PENDING TAGS
                slug: node.fields.slug,
                // finding author imageUrl from authors.js and passing it to the single post template 

            },
        })
    })


            // creating post pages

    const postsPerPage = 5
    const numberOfPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numberOfPages }).forEach((_, index) => {
        const isFirstPage = index === 0
        const currentPage = index + 1

        // skip first page and go to index.js
        if (isFirstPage) return

        createPage({
            path: `/page/${currentPage}`,
            component: templates.postList,
            context: {
                limit: postsPerPage,
                skip: index * postsPerPage,
                numberOfPages: numberOfPages,
                currentPage: currentPage,
            },
            })
        })

        // tags PAGE GENERATOR; getting all tags
        let tags = []
        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags)
            }
          })

        // account of tags, we're putting them like this: ['design', 'example', 'luck'] and also {design: X, example: Y, luck: z}
        let tagPostCounts = {}
        tags.forEach(tag => {
            tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1; 
        })

        tags = _.uniq(tags) //elimninate all duplicate entries 

        // create tags page here 
        createPage({
            path: `/tags`,
            component: templates.tagsPage,
            context: {
                tags,
                tagPostCounts,
            }
        })

        // tag post page creation here: 
        tags.forEach(tag => {
            createPage({
                path: `/tag/${_.kebabCase(tag)}`,
                component: templates.tagPosts,
                context: {
                    tag
                }
            })
        })

        // CREATING PAGES FOR EACH AUTHOR'S POSTS: 
/*         authors.forEach(author => {
            createPage({
                path: `/author/${slugify(author.name)}`,
                component: templates.authorPosts,
                context: {
                    authorName: author.name,
                    imageUrl: author.imageUrl, 
                }, 
            })
        }) */
}


