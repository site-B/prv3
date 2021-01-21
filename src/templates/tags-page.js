import React from 'react'; 
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Button, Badge } from 'reactstrap'; 
import { slugify } from '../utils/utilityFunctions'; 
import { Link } from 'gatsby'; 

const tagsPage = ({ pageContext }) => {
    const { tags, tagPostCounts } = pageContext; 
    return (
        <Layout pageTitle='Tags'>
            <SEO title='Tags' keywords={['tags', 'topics']}/> 
                <ul>
                    
                    {tags.map(tag => (
                            <li key={tag} style={{ marginBottom: '1rem' }}>
                                <Button className='myButton' color='white' href={`/tag/${slugify(tag)}`}>
                                    {tag} 
                                    <Badge className='myTags' style={{ margin: "0 0 0 1rem"}}>
                                        {tagPostCounts[tag]}
                                    </Badge>
                                </Button>
                            </li>
                    ))}
                </ul>
                <br></br>
                <Link 
                    className='myButton'
                    to={'/'}>Go home
                </Link>
        </Layout>
    )
}

export default tagsPage; 