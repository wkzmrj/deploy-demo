import { Box, Heading, Text, Divider } from '@chakra-ui/core'
import Layout from '../../components/Layout'
import { css } from '@emotion/core'
import axios from 'axios'
import { baseURL } from '../../axios.config'


const DetailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  & > img {
    margin-bottom: 10px;
    display: block;
  }
`;

export default function Detail({ detail }) {
  return (
    <Layout>
      <Box maxW={1200} mx="auto" mt="70px">
        <Heading as="h2" size="xl">{detail.title}</Heading>
        <Heading mt="10px"
          as="h4"
          size="lg"
          color="gray.500"
          fontWeight="light">
          {detail.sub}
        </Heading>
        <Divider mt="10px" />
        <Box overflow="hidden" mt="10px">
          <Text float="left">作者: {detail.author}</Text>
          <Text float="right">发布时间: {detail.publish}</Text>
        </Box>
        <Divider mt="10px" />
        <Box css={DetailContainer} dangerouslySetInnerHTML={{ __html: detail.content }}></Box>
      </Box>
    </Layout>

  )
}
// 获取用户能访问的所有路由参数；
export async function getStaticPaths() {
  let { data } = axios.get('api/videos', { baseURL });
  let paths = data.map(() =>
    ({ params: { id } })
  );
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  let id = params.id;
  let { data: detail } = await axios.get(`/api/detail?${id}`, { baseURL });
  return {
    props: {
      detail
    }
  }
}