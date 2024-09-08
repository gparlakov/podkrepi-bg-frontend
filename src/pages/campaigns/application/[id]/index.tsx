import { routes } from 'common/routes'
import EditCampaignApplicationPage from 'components/client/campaign-application/EditCampaignApplicationPage'
import { securedProps } from 'middleware/auth/securedProps'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query.id

  const propsOrRedirect = await securedProps(ctx, routes.campaigns.applicationEdit(id as string))

  // props i.e. means we're logged in
  if ('props' in propsOrRedirect) {
    const translation = await serverSideTranslations(ctx.locale ?? 'bg', [
      'common',
      'auth',
      'validation',
      'campaigns',
      'campaign-application',
    ])

    return {
      props: {
        id,
        ...propsOrRedirect.props,
        ...translation,
      },
    }
  }

  // redirect
  return propsOrRedirect
}

export default EditCampaignApplicationPage
