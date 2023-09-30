import { auth } from "auth"
import Layout from "./components/layout"

import type { GetServerSidePropsContext } from "next"
import { useSession } from "next-auth/react"

export default function ServerSidePage() {
  const { data: session } = useSession()
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  return (
    <Layout>
      
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
    </Layout>
  )
}

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: GetServerSidePropsContext) {
  return { props: { session: await auth(context.req, context.res) } }
}
