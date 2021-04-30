/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title"
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing"
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"
import { visuallyHidden } from "@lekoarts/gatsby-theme-minimal-blog/src/styles/utils"
import Projects from "../../../../src/components/sections/projects"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import About from "../texts/about"
// @ts-ignore
import Bottom from "../texts/bottom"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()
  const { siteTitle } = useSiteMetadata()

  return (
    <Layout>
      <h1 sx={visuallyHidden}>{siteTitle}</h1>
      <section sx={{ height: '90vh', p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
        <Hero />
        <div sx={{ mt: [5, 6, null]}}>
          <About />
        </div>
      </section>
      <section sx={{ mt: [6, null, null]}}>
        <Title text="My Work Experience">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>View All Work Experiences</Link>
      </Title>
      <Listing posts={posts} showTags={false} />
      <List sx={{ variant: `section_bottom` }}>
        <Bottom />
      </List>
      </section>
      
    </Layout>
  )
}

export default Homepage
